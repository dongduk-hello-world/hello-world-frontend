import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import styles from "./myLecture.module.scss";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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

  const { userdata, lecturedata }  = useOutletContext();
  const lecturelist = lecturedata.classes;
  console.log(userdata);
  console.log(lecturelist);

  const [overlay, setOverlay] = useState(false);
  const [open, setOpen] = useState(false);
  const showOverlay = () => {
    setOverlay(!overlay);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
              <Typography variant="h6" gutterBottom>{`ID: ${userdata.email.split('@')[0]}`}</Typography>
              <Typography variant="h6" gutterBottom>{`회원 유형: ${userdata.type}`}</Typography>
              <Typography variant="h6" gutterBottom>{`속한 강의 수: ${lecturelist.length}개`}</Typography>
            </div>
          </Box>
          <Button 
            variant="outlined" 
            color="error" 
            startIcon={<DeleteIcon />} 
            size="large" 
            className={styles.deleteButton}
            onClick={showOverlay}
          >
            { overlay ?
              '취소'
              :
              ( userdata.type === "학생" ? '클래스 탈퇴' : '클래스 삭제' )
            }
            
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className={styles.cardContainer}>

          {lecturelist.map((lecture, index) => (
            <div className={styles.card}>
              { overlay &&
                <div className={styles.overlay}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/public_assets/deleteIcon.png`} 
                    alt="deleteIcon" 
                    className={styles.deleteIcon}
                    onClick={handleClickOpen}
                  />
                </div>
              }
              <div className={styles.cardTip}>
                <div className={styles.circle}>
                  <img src={`${process.env.PUBLIC_URL}/public_assets/bookIcon.png`} alt="bookIcon" />
                </div>
              </div>
              <div class={styles.cardContent}>
                <h1>{`${lecture.name}`}</h1>
                <h3>{`${lecture.filterprofessor}`} / {`${lecture.divide}분반`} / {`${lecture.period}학년도 ${lecture.filterterm}학기`}</h3>
                <div className={styles.cardContentBottom}>
                  <div className={styles.chips}>
                    {lecture.filterlanguage.split("/").map((language) => (
                      <Chip label={`${language}`} variant="outlined" />
                    ))}
                  </div>
                  <h3>45/45 명</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};
