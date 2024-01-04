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
        <InfoTable />
        <ScoreTable />
      </div>
    </div>
  );
};
