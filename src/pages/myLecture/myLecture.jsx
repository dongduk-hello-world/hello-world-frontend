import styles from "./myLecture.module.scss";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
          <Box 
            sx={{
              boxShadow: 1,
              px: 17,
              py: 5,
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/public_assets/profile.png`} alt="profile"/>
            <div className={styles.textView}>
              <Typography variant="h6" gutterBottom>ID: 20202020</Typography>
              <Typography variant="h6" gutterBottom>회원 유형: 학생</Typography>
              <Typography variant="h6" gutterBottom>속한 강의 수: 3개</Typography>
            </div>
          </Box>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />} size="large" className={styles.deleteButton}>
            클래스 탈퇴
          </Button>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardTip}>
              <div className={styles.circle}>
                <img src={`${process.env.PUBLIC_URL}/public_assets/bookIcon.png`} alt="bookIcon" />
              </div>
            </div>
            <div class={styles.cardContent}>
              <h1>프로그래밍 논리의 이해</h1>
              <h3>박수희 / 1분반 / 2023학년도 1학기</h3>
              <div className={styles.cardContentBottom}>
                <div className={styles.chips}>
                  <Chip label="C" variant="outlined" />
                  <Chip label="JAVA" variant="outlined" />
                  <Chip label="Python" variant="outlined" />
                </div>
                <h3>45/45 명</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
