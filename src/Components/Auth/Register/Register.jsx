import { useState, Fragment, useContext } from 'react';
import * as Yup from 'yup';
import { Box, Stepper, Step, StepButton, Button } from '@mui/material';
import { useFormik } from 'formik';
import { FormRegisterUser } from './FormRegisterUser';
import { TypeUserForm } from './TypeUserForm';
import { RegisterContext } from '../../../Services/Context/RegisterContext';
import { ActionFooterAuth } from '../ActionFooterAuth';
import { MainLayoutContext } from '../../../Services/Context/MainLayoutContext';
import { modalEnums } from '../../../Enums/modalEnums';

const steps = ['Tipo de usuario', 'Terminar registro'];

//Notas:
// 1. Mencionarle a Axel que el estado del usuario se agrega de forma estatica
export const Register = () => {
    const { handleOpenModal } = useContext(MainLayoutContext);
    const [activeStep, setActiveStep] = useState(0);

    const formik = useFormik({
        initialValues: {
            name: '',
            apellido: '',
            email: '',
            rPassword: '',
            rPasswordConfirmation: '',
            role: 0,
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Campo requerido'),
            apellido: Yup.string().required('Campo requerido').matches(/^[aA-zZ\S]+$/, 'No se aceptan espacios'),
            email: Yup.string().email('Formato de correo incorrecto').required('Campo requerido'),
            rPassword: Yup.string().min(6, 'La contraseña debe tener al menos 5 caracteres').required('La contraseña es requerida'),
            rPasswordConfirmation: Yup.string().oneOf([Yup.ref('rPassword'), null], 'Las contraseña debe de coincidir').required('Campo requerido')
        }),
        onSubmit: (values, actions) => {
            console.log(values); 

            actions.resetForm();
        }
    });

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    return (
        <RegisterContext.Provider value={{
            formik,
            values: formik.values,
            handleInputChange: formik.handleChange,
            handleNext
        }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepButton color="inherit">
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                <Fragment>
                    <div className="mt-5 mb-3">
                        {
                            activeStep === 0 ? (
                                <TypeUserForm />
                            ) : (
                                <FormRegisterUser />
                            )
                        }
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, alignItems: "center" }}>
                        <Button
                            color="primary"
                            variant="outlined"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Regresar
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <ActionFooterAuth
                            text="¿Ya tienes cuenta?"
                            actionText="Inicia sesión"
                            actionHandle={() => handleOpenModal(modalEnums.login)}
                        />
                    </Box>
                </Fragment>
            </div>
        </RegisterContext.Provider>
    );
}
