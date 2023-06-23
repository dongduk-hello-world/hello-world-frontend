import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import styles from "./style.module.css";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import ScoreTable from './scoreTable.jsx'

import { useStyles } from "./styles";

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'; 
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';
import { getSubjectList } from "../hooks";
// import Sidebar from '../../homeUI'

const testName = '중간고사'
const TopBox = () => {
  return (
    <Grid container>
      <Grid xs={1} />
      <Grid sx={11}>
        <Typography variant="h4" gutterBottom>{testName} 결과</Typography>
      </Grid>
    </Grid>
  );
}

//작업중
export default function ResultProfessor() {
  const { user, assignment, results } = useLoaderData(); // 요거 갖다가 화면에 뿌리면 됌

  const Sidebar = () => {

    let [lecture_list, setLecture_list] = useState([[]]);

    let name = "전유영"
    let grade = "1"
    let id = "20201015"

    const classes = useStyles();

    useEffect(() => {
      // const result = getSubjectList();
      
      // const getData = () => {
      //   result.then((list) => {
      //     console.log(list);
      //     for (let i = 0; i < Object.keys(list).length; i++) {
      //       // if (lecture_list.length <= Object.keys(list).length) {
      //         setLecture_list(lecture_list => [...lecture_list, list[i]]);
      //         // lecture_list[i] = list[i];
      //       // }
      //     }
      //   });
      // };

      // getData()
    },[]);

    return (
      <span>
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
              <ListItem key={Number(lecture['classId'])}>
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
      </span>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={3} minHeight="100vh">
        <Sidebar />
      </Grid>
      <Grid xs={9}>
        <div className={styles.container}>
          <TopBox />
          <Grid container className={styles.container}>
            {/* <Grid xs={1} />
            <Grid xs={4}>
            </Grid>
            <Grid xs={1} />
            <Grid xs={5}>
              
            </Grid>
            <Grid xs={1} /> */}
          </Grid>
          <ScoreTable rows={results}/>
        </div>
      </Grid>
    </Grid>
  );
}