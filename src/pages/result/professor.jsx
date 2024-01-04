import { useState } from 'react';

import styles from "./professor.module.scss";

import Header from "components/header.jsx"

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
        <Box>
          <Typography variant='h4' sx={{mb: 5}}>과목: [프로그래밍 논리의 이해]</Typography>
          <Typography variant='h4'>[과제 1] 결과</Typography>
        </Box>
      </div>
    </div>
  );
};
