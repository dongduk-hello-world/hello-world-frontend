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
import Grid from '@mui/material/Grid';
import { getSubjectList } from "./hooks";

let classList;

export default function TemporaryDrawer() {

  let [lecture_list, setLecture_list] = useState([]);

  // function setClassList(props) {
  //   classList = props;
  
  //   for (let i = 0; i < Object.keys(classList).length; i++) {
  //     setLecture_list(lecture_list => [...lecture_list, classList[i]['className']]);
  //     console.log(lecture_list);
  //   }

  //   // console.log(lecture_list);
  // }

  // useEffect(() => {  
  //   const userId = 1;
  //   fetch('http://localhost:8080/users/' + userId + '/subjects')
  //   .then(response => response.json())
  //   .then(result => {
  //     setClassList(result);
  //   })
  //   .catch(error => console.log('error', error));
  // }, []);

  let name = "전유영"
  let grade = "1"
  let id = "20201015"

  const classes = useStyles();

  useEffect(() => {
    const result = getSubjectList();
    
    const getData = () => {
      result.then((nameList) => {
        setLecture_list(nameList)
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

