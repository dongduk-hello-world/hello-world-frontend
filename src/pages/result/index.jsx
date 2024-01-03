import { useState } from 'react';

import styles from "./style.module.scss";

import Header from "components/header.jsx"
import ScoreTable from "./scoreTable.jsx"
import InfoTable from "./infoTable.jsx"

import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default () => {
  const theme = createTheme({
    palette: {
      themeColor: {
        main: '#5E99F1',
        light: '#C4DAFC',
        dark: '#3874CB',
        contrastText: '#000000',
      },
    }
  });

  return (
    <div>
      <Header />
      <div className ={styles.container}>
        <Grid container spacing={12}>
          <Grid item xs={8}>
            <ScoreTable />
          </Grid>
          <Grid item xs={4}>
            <InfoTable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
