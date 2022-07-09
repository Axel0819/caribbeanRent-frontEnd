import { useState, Fragment } from 'react';
import { Box, Stepper, Step, StepButton, Button } from '@mui/material';
import { FormRegisterUser } from './FormRegisterUser';
import { TypeUserForm } from './TypeUserForm';
import { useForm } from '../../../Hooks/useForm';
import { RegisterContext } from '../../../Services/Context/RegisterContext';

const steps = ['Tipo de usuario', 'Terminar registro'];

export const Register = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: "",
        role: 0,
        state: 0
    })

    const totalSteps = () => {
        return steps.length;
    }

    const completedSteps = () => {
        return Object.keys(completed).length;
    }

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    }

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    }

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
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
            <Box sx={{ width: '450px' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
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
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="primary"
                                variant="outlined"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Regresar
                            </Button>
                        </Box>
                    </Fragment>
                </div>
            </Box>
        </RegisterContext.Provider>
    );
}
