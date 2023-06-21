import { useState, useEffect } from "react";
import styles from "./style.module.scss";

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { getClassInfo, getStudents, getAssignments } from "./hooks";
import Sidebar from '../homeUI'

export default function ClassRoom() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //[classId, className, professor, divide, date]
  const [classInfo, setClassInfo] = useState([]);
  const [studentList, setStudentList] = useState([[]]);
  const [studentNum, setStudentNum] = useState(0);
  const [assignmentList, setAssignmentList] = useState([[]]);

  const hwName='hw1';
  const hwStartDate='0000/00/00';
  const hwEndDate='0000/00/00';

///////////////////////////////////////
  useEffect(() => {
    const result = getClassInfo();

    const getData = () => {
      result.then((info) => {
        setClassInfo(info)
        console.log(classInfo);
      });
    };
    getData()
  },[]);

  useEffect(() => {
    const result = getStudents();

    const getData = () => {
      result.then((list) => {
        for (let i = 0; i < list.length; i++) {
          studentList[i] = list[i];
        }
        setStudentNum(list.length);
      });
    };
    getData()
  },[]);

  useEffect(() => {
    const result = getAssignments();

    const getData = () => {
      result.then((list) => {
        for (let i = 0; i < list.length; i++) {
          assignmentList[i] = list[i];
        }
      });
    };
    getData()
  },[]);
///////////////////////////////////////

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  

  function addHW() {
    alert('move to add homework window');
  }

  const ClassInfo = () => {
    return (
      <Box component="span" className={styles.infoContainer}>
        <Typography variant="h4" gutterBottom>
          {classInfo['className']}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {classInfo['professor']} / {classInfo['divide']}분반
        </Typography>
        <div>개설학기 : {classInfo['period']}</div>
        <span>수강생 수 : {studentNum}</span>
        <Button variant="text" onClick={handleOpen}>모두보기</Button>
      </Box>
    );
  }

  function kickStudent() {
    alert('학생 kick');
  }

  const Item = (props) => {
    const student = props.student;

    return (
      <li className={styles.item}>
        <Grid container>
          <Grid xs={2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
          </Grid>
          <Grid xs={8}>
            <span>{student[0]} / {student[1]}</span>
          </Grid>
          <Grid xs={2}>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={kickStudent} width="16" height="16" fill="currentColor" class="bi bi-person-fill-slash" viewBox="0 0 16 16" className={styles.kick}>
              <path d="M13.879 10.414a2.501 2.501 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
            </svg>
          </Grid>
        </Grid>
      </li>
    );
  }

  const ItemList = () => {
    return (
      <ul>
        {studentList.map((student) => (
          <Item student={student}/>
        ))}
      </ul>
    );
  }

  const AddHWButton = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                학생 리스트
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ItemList />
              </Typography>
            </Box>
          </Fade>
        </Modal>

        <Button 
          variant="contained" 
          sx={{ width: 100}} 
          className={styles.button}
          onClick={addHW}
        >
          시험 추가
        </Button>
      </div>
    );
  }

  const Assignment = (props) => {
    const assignment = props.assignment
    console.log(assignment);

    return(
      <Box>
        <Paper sx={{maxWidth: 1000}}>
          <Box>
            <Grid container>
              <Grid xs={2} className={styles.submitIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"/>
                </svg>
              </Grid>
              <Grid xs={8}>
                <div>{assignment['assignmentName']}<br/>{assignment['startTime']}<br/>{assignment['endTime']}</div>
              </Grid>
              <Grid xs={2} className={styles.submitIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#31B404" class="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF0000" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    );
  }

  const AssignmentItems = () => {
    return (
      <div className={styles.assignmentList}>
        {assignmentList.map((assignment) => (
          <Assignment assignment={assignment} />
        ))}
      </div>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Box className={styles.container}>
          <ClassInfo />
          <AddHWButton />
          <AssignmentItems />
        </Box>
      </Grid>
    </Grid>
  );
}

