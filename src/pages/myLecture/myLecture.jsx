import styles from "./myLecture.module.scss";

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export default () => {
  const theme = createTheme({
    palette: {
      themeColor: {
        main: '#5E99F1',
        light: '#C4DAFC',
        dark: '#3874CB',
        contrastText: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <img src={`${process.env.PUBLIC_URL}/public_assets/profile.png`} alt="profile"/>
          <div className={styles.textView}>
            <Typography variant="h6" gutterBottom>이름: ㅇㅇㅇ</Typography>
            <Typography variant="h6" gutterBottom>ID: 20202020</Typography>
            <Typography variant="h6" gutterBottom>회원 유형: 학생</Typography>
            <Typography variant="h6" gutterBottom>속한 강의 수: 3개</Typography>
          </div>
          <Container maxWidth="sm">
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} className={styles.deleteButton}>
              클래스 탈퇴
            </Button>
          </Container>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div class={styles.cardContent}>
              <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
              <Typography variant="subtitle2" gutterBottom>
                박수희 / 1분반
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
