import { useState } from "react";
import styles from "./style.module.scss";
import { useStyles } from "./styles";

// import LectureProf from "./professor";
// import LectureStudent from "./student";
// import LectureForm from "./professor/Form";
// import ClassRoom from "../ClassRoom";
// import ResultStudent from "../Result/Student";

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'; 
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';

export default function TemporaryDrawer() {

  let name = "전유영"
  let grade = "1"
  let id = "20201015"

  const lecture_list = ['데이터베이스프로그래밍', '소프트웨어시스템개발', '자료구조'];
  const classes = useStyles();
  
  const list = () => (
    <Box className = {classes.box}>
      <div className={styles.info}>
        <h1>{name}</h1><br/>
        <div>
          <span>{grade}학년</span>/<span>{id}</span>
        </div>
      </div>
      <Divider />
      <List>
        {lecture_list.map((text, index) => (
          <ListItem key={text} disablePadding className = {classes.list}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={3}>
    //     <span>{list()}</span>
    //   </Grid>
    //   <Grid item xs={9}>
    //     {/* <LectureForm /> */}
    //     {/* <ResultStudent /> */}
    //     {/* <ClassRoom /> */}
    //   </Grid>
    // </Grid>
    <span>{list()}</span>
  );
}

