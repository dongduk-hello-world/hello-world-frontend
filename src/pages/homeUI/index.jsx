import { useState, useEffect } from "react";
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
import SchoolIcon from '@mui/icons-material/School';
import Grid from '@mui/material/Grid';
import { getSubjectList } from "./hooks";

let classList;

export default function TemporaryDrawer() {

  let [lecture_list, setLecture_list] = useState([[]]);

  let name = "전유영"
  let grade = "1"
  let id = "20201015"

  const classes = useStyles();

  useEffect(() => {
    const result = getSubjectList();
    
    const getData = () => {
      result.then((list) => {
        console.log(list);
        for (let i = 0; i < Object.keys(list).length; i++) {
          lecture_list[i] = list[i];
        }
      });
    };
    getData()
  },[]);
  
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
        {lecture_list.map((lecture) => (
          <ListItem key={lecture['classId']}>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={lecture['className']} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <span>{list()}</span>
  );
}

