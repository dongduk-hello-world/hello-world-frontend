import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { deleteLecture, withdrawLecture } from './hooks.js'

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClose = async (event) => {
    if (event.target.innerText === "삭제")
      await deleteLecture(lecturelist[selectedIndex].lecture_id);
    else if (event.target.innerText === "탈퇴")
      await withdrawLecture(lecturelist[selectedIndex].lecture_id, userdata.user_id);

    window.location.href="/";
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
            onClick={() => {setOverlay(!overlay);}}
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
            {userdata.type === "학생" ?
              <>
                <DialogTitle>
                  정말 탈퇴하시겠습니까?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  탈퇴 시 클래스 내에서 사용자 본인의 정보가 삭제되며, 
                  클래스에 재가입시 이전 활동 정보(시험 제출여부, 시험별 점수 등) 복구가 어려울 수 있습니다.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>탈퇴</Button>
                  <Button onClick={handleClose}>취소</Button>
                </DialogActions>
              </>
              :
              <>
                <DialogTitle>
                  정말 해당 과목을 삭제하시겠습니까?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  클래스 삭제 시 클래스 관련 모든 정보(시험 기록, 학생 정보 등)가 모두 삭제되며, 
                  이는 복구하기 어렵습니다. 정말로 삭제하시겠습니까?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>삭제</Button>
                  <Button onClick={handleClose}>취소</Button>
                </DialogActions>
              </>
            }
            
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
                    onClick={() => {setSelectedIndex(index); setOpen(true);}}
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
