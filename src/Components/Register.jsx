import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TypeUserForm } from './Register/TypeUserForm';

const steps = ['Tipo de usuario', 'Terminar registro'];

export const Register = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
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
                {
                    <React.Fragment>
                        <div className="mt-5 mb-3">
                            {
                                activeStep === 0 ? (
                                    <TypeUserForm handleNext={handleNext} />
                                ) : (
                                    <h5>Aqui va el segundo form</h5>
                                )
                            }
                        </div>
                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
                            <Box sx={{ flex: '1 1 auto' }} />

                        </Box>
                    </React.Fragment>
                }
            </div>
        </Box>
    );
}
