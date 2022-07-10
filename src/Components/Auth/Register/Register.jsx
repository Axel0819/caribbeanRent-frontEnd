import { useState, Fragment } from 'react';
import { Box, Stepper, Step, StepButton, Button } from '@mui/material';
import { FormRegisterUser } from './FormRegisterUser';
import { TypeUserForm } from './TypeUserForm';
import { useForm } from '../../../Hooks/useForm';
import { RegisterContext } from '../../../Services/Context/RegisterContext';
import { ActionFooterAuth } from '../ActionFooterAuth';
import { useContext } from 'react';
import { MainLayoutContext } from '../../../Services/Context/MainLayoutContext';
import { modalEnums } from '../../../Enums/modalEnums';

const steps = ['Tipo de usuario', 'Terminar registro'];

export const Register = () => {
    const { handleOpenModal } = useContext(MainLayoutContext);
    const [activeStep, setActiveStep] = useState(0);

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: "",
        role: 0,
        state: 0
    })

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    return (
        <RegisterContext.Provider value={{
            values,
            handleInputChange,
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
