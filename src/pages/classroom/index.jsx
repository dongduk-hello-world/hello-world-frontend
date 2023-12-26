import { useState } from 'react';

import styles from "./style.module.scss";

import Header from "components/header.jsx"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Box from '@mui/material/Box';

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
                  <AutoStoriesIcon className={styles.icon} />
                </div>
              </div>
              <h2 className={styles.className}>프로그래밍 논리의 이해</h2>
            </div>
            <div className={styles.classInfo2}>
              <span>
                <span className={styles.title}>교수</span>
                <br />
                <span className={styles.subtitle}>박수희</span>
              </span>
              <span>
                <span className={styles.title}>수업학기</span>
                <br />
                <span className={styles.subtitle}>2023-1</span>
              </span>
              <span>
                <span className={styles.title}>수강생 수</span>
                <br />
                <span className={styles.subtitle}>n명</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Box className={styles.announceBox}>
          <AnnouncementIcon classname={styles.announceIcon}/>
          미완료, 완료 모두 표시됩니다.  
        </Box>
      </div> 
    </div>
  );
};
