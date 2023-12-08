import styles from "./form.module.scss";

import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default () => {

  const steps = [
    {
      label: '클래스 기본 정보 입력',
      description: `생성할 클래스의 이름과 개설자의 이름(본인 이름)을 입력해 주세요. 
      클래스 이름과 개설자 이름은 학생이 해당 클래스를 검색할 때 키워드로 이용됩니다.
      개설자 이름을 성까지 입력해주세요. 형식에 맞춰 입력하지 않으면 검색되지 않을 수 있습니다.
      예시) 홍길동(o), 길동(x), 길동교수(x), 홍길동교수(x)
      클래스 이름과 개설자 이름은 추후 수정이 어려울 수 있으니 신중하게 입력해주세요.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.container}>
    <div>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
    <div className={styles.frame}>
      <div className={styles.form}>
        <form>
          <Typography variant="h6" gutterBottom>1. 생성할 과목의 이름을 입력해주세요.</Typography>
          <TextField
            required
            id="filled-required"
            label="과목명 입력"
            defaultValue=""
            fullWidth
            variant="filled"
          />
          <Box sx={{height: 50}} />
          <Typography variant="h6" gutterBottom>2. 과목을 개설하는 사람의 이름을 입력해주세요.(본인 이름 입력)</Typography>
          <TextField
            required
            id="filled-required"
            label="이름 입력"
            defaultValue=""
            fullWidth
            variant="filled"
          />
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              disabled
              onClick={handleBack}
            >
              이전
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={handleNext}
            >
              다음
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
