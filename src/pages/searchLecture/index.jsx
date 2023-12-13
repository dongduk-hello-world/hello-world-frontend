import { useState } from 'react';

import styles from "./style.module.scss";

import Header from "components/header.jsx"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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
    },

    typography: {
      bold: {
        fontWeight: 500,
        color: 'red',
      }
    },
  });

  theme.typography.h6 = {
    fontWeight: 600,
    fontSize: '16px'
  }

  const chipClick = () => {
    console.info('You clicked the Chip.');
  };

  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const yearSelect = (event) => {
    setYear(event.target.value);
  };
  const semesterSelect = (event) => {
    setSemester(event.target.value);
  };

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <div className ={styles.container}>
          <div className={styles.searchSection}>
            <div>
              <Typography variant='h6'>과목명 검색</Typography>
              <Box sx={{ minHeight: 20 }} />
              <FormControl variant="standard">
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant="outlined" size="small">검색</Button>
            </div>

            <div>
              <Typography variant='h6'>필터 검색</Typography>
              <Box sx={{ minHeight: 20 }} />
              <div className={styles.chipContainer}>
                <Chip label="박수희 교수님" variant="outlined" onClick={chipClick} />
                <Chip label="한혁 교수님" variant="outlined" onClick={chipClick} />
                <Chip label="박창섭 교수님" variant="outlined" onClick={chipClick} />
                <Chip label="최윤석 교수님" variant="outlined" onClick={chipClick} />
              </div>
            </div>

            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                  labelId="year-label"
                  value={year}
                  onChange={yearSelect}
                >
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2025}>2025</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="semester-label">Semester</InputLabel>
                <Select
                  labelId="semester-label"
                  value={semester}
                  onChange={semesterSelect}
                >
                  <MenuItem value={1}>1학기</MenuItem>
                  <MenuItem value={2}>2학기</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
            <div className={styles.card}>
              <div class={styles.cardContent}>
                <Typography variant="h6" gutterBottom>프로그래밍 논리의 이해</Typography>
                <Typography variant="subtitle2" gutterBottom>
                  박수희 / 1분반
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};
