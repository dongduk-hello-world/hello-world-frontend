import { useState } from "react";
import styles from "./style.module.css";
import $ from 'jquery';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ResultStudent() {

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

  const Graph = () => {
    return (
      <div class='graphContainer'>
        <CircularProgressbar value={250/300*100} text={`250/300`} />
      </div>
    );
  }

  const Item = () => {
    return (
      <Grid container>
        <Grid xs={1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
          </svg>
        </Grid>
        <Grid xs={8}>
          <span>
            문제 이름
          </span>
        </Grid>
        <Grid sx={3}>
          <span>
            30 / 50
          </span>
        </Grid>
      </Grid>
    );
  }

  const ItemList = () => {
    return (
      <ul class='ul'>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
        <li className={styles.listItem}><Item /></li>
      </ul>
    );
  }

  $(function() {
    var a = $(".graphContainer").css("height");
    $(".ul").css("height", a);
  });

  return (
    <div className={styles.container}>
      <TopBox />
      <Grid container className={styles.container}>
        <Grid xs={1} />
        <Grid xs={4}>
          <Graph />
        </Grid>
        <Grid xs={1} />
        <Grid xs={5}>
          <ItemList />
        </Grid>
        <Grid xs={1} />
      </Grid>
    </div>
  );
}