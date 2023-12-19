import { useState } from 'react';

import styles from "./style.module.scss";

import Header from "components/header.jsx"

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
    <div className={styles.container}>
      <Header />
      <div className={styles.top}>
        <div className={styles.contents}>
          <div className={styles.items}>
            <div className={styles.classInfo1}>
              <div className={styles.iconContainer}>
                <div className={styles.iconFrame}>
                  
                </div>
              </div>
            </div>
            <div className={styles.classInfo2}>
              fdsagsf
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        dfasdafa
      </div> 
    </div>
  );
};
