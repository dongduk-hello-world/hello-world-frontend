import styles from "./style.module.scss";

import Lottie from 'lottie-react';
import { lottie } from 'assets/lottie';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default () => {
  const theme = createTheme({
    palette: {
      themeColor: {
        main: '#5E99F1',
        light: '#5E99F1',
        dark: '#5E99F1',
        contrastText: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.lottieContainer}>
          <Lottie animationData={lottie} className={styles.lottie}/>
        </div>
        <div className={styles.buttonContainer}>
          <Typography variant="h6" gutterBottom>
            아직 가입한 강의가 없어요!<p />
            과목 생성을 통해 새 강의를 개설해주세요.
          </Typography>
          <Button variant="contained" color="themeColor">
            <b>과목 개설 바로가기</b>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};
