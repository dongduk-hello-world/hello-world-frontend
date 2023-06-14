import { useState } from "react";
import styles from "./style.module.css";

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

  const Graph = () => {

  }

  return (
    <div>
      <TopBox />
    </div>
  );
}