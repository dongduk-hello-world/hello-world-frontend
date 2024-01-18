import styles from "./form.module.scss";

import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const submit = () => {
    console.log(state);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [randomString, setRandomString] = useState('');

  const changeYear = (event) => {
    setYear(event.target.value);
  };
  const changeSemester = (event) => {
    setSemester(event.target.value);
  };

  const [state, setState] = useState({
    C: false,
    Java: false,
    Python: false,
  });

  const handleCheckbox = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { C, Java,  Python } = state;

  const random = () => {
    setRandomString(Math.random().toString(16).substr(2, 6));
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
            {activeStep === 0 ?
              <div>
                <Typography variant="h6" gutterBottom>1. 생성할 과목의 이름을 입력해주세요.</Typography>
                <TextField
                  required
                  id="filled-required"
                  label="과목명 입력"
                  defaultValue=""
                  fullWidth
                  variant="outlined"
                />
                <Box sx={{height: 50}} />
                <Typography variant="h6" gutterBottom>2. 과목을 개설하는 사람의 이름을 입력해주세요(본인 이름 입력).</Typography>
                <TextField
                  required
                  id="filled-required"
                  label="이름 입력"
                  defaultValue=""
                  fullWidth
                  variant="outlined"
                />
                <Box sx={{height: 50}} />
                <Typography variant="h6" gutterBottom>3. 과목 설명을 간략하게 입력해주세요.</Typography>
                <TextField
                  required
                  id="filled-required"
                  label="설명 입력"
                  defaultValue=""
                  fullWidth
                  variant="outlined"
                />
              </div>
            :
              (activeStep === 1 ?
                <div>
                  <Typography variant="h6" gutterBottom>4. 수업이 진행되는 학년도, 학기를 선택해주세요.</Typography>
                    <Grid
                      container
                      spacing={4}
                      alignItems="center"
                    >
                      <Grid item xs={4}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth size="small">
                            {/* <InputLabel id="year-select-label">학년도</InputLabel> */}
                            <Select
                              labelId="year-select-label"
                              id="year-select"
                              value={year}
                              label="Year"
                              onChange={changeYear}
                            >
                              <MenuItem value={2023}>2023</MenuItem>
                              <MenuItem value={2024}>2024</MenuItem>
                              <MenuItem value={2025}>2025</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        학년도
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth size="small">
                            {/* <InputLabel id="semester-select-label">학기</InputLabel> */}
                            <Select
                              labelId="semester-select-label"
                              id="semester-select"
                              value={semester}
                              label="Semester"
                              onChange={changeSemester}
                            >
                              <MenuItem value={1}>1학기</MenuItem>
                              <MenuItem value={2}>2학기</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        학기
                      </Grid>
                    </Grid>
                  <Box sx={{height: 50}} />
                  <Typography variant="h6" gutterBottom>5. 분반을 입력해주세요.</Typography>
                  <Grid 
                    container
                    spacing={3}
                    alignItems="center"
                  >
                    <Grid item xs={2}>
                      <TextField
                        required
                        defaultValue=""
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      분반
                    </Grid>
                    <Grid item xs={8} />
                  </Grid>
                </div>
              :
                <div>
                  <Typography variant="h6" gutterBottom>6. 과제에서 사용할 수 있는 언어를 설정해주세요.</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckbox} name={"C"} checked={C}/>
                      }
                      label="C"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckbox} name={"Java"} checked={Java}/>
                      }
                      label="Java"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox onChange={handleCheckbox} name={"Python"} checked={Python}/>
                      }
                      label="Python"
                    />
                  </FormGroup>
                  <Box sx={{height: 50}} />
                  <Typography variant="h6" gutterBottom>7. 초대코드를 생성해주세요.</Typography>
                  <Grid 
                    container
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid item xs={9}>
                      <TextField
                        required
                        value={randomString}
                        fullWidth
                        outlined
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        onClick={random}
                      >
                        랜덤생성
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )
            }
            
            <div className={styles.buttonContainer}>
              {activeStep === 0 ? 
                <Button
                  variant="contained"
                  size="large"
                  disabled
                  onClick={handleBack}
                > 
                  이전
                </Button>
              :
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleBack}
                > 
                  이전
                </Button>
              }
              {activeStep === steps.length - 1 ? 
                <Button
                  variant="contained"
                  size="large"
                  onClick={submit}
                >
                  개설
                </Button>
                : 
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleNext}
                >
                  다음
                </Button> 
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
