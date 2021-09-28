import React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import "./QueryTracker.css"

const steps = [
  {
    label: 'Query Alloted',
    description: `Query has been alloted to the concerned person`,
  },
  {
    label: 'Query Stage 1',
    description: 'your query is being analysed',
  },
  {
    label: 'Query Stage 2',
    description: `your query is under process`,
  },
  {
    label: 'Query Stage 3',
    description: `query is under final approval by admin`,
  },
];

function QueryTracker(props) {
  const [activeStep, setActiveStep] = React.useState(3);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <p>{step.description}</p>
              {/* <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <h4>All steps completed - you&apos;re finished</h4>
        </Paper>
      )}
    </div>
  );
}

export default QueryTracker;