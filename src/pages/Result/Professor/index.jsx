import { useState } from "react";
import styles from "./style.module.css";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import ScoreTable from './scoreTable.jsx'

//작업중
export default function ResultProfessor() {

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

  // const Graph = () => {

  // }

  return (
    <div className={styles.container}>
      <TopBox />
      <Grid container className={styles.container}>
        <Grid xs={1} />
        <Grid xs={4}>
          {/* <Graph /> */}
        </Grid>
        <Grid xs={1} />
        <Grid xs={5}>
          
        </Grid>
        <Grid xs={1} />
      </Grid>
      <ScoreTable />
    </div>
  );
}