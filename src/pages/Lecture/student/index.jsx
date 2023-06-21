import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { useStyles } from "./styles";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = ({ target: { value } }) => setKeyword(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`검색: ${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid 
        container 
        justifyContent="space-between"
        flexDirection={{ xs: 'row' }} 
      >
        <Grid item xs={11}>
        <TextField
          id="search-bar"
          className="text"
          label="Enter the class name"
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={`${keyword}`}
          onChange={handleChange}
          fullWidth
        />
        </Grid>
        <Grid item xs={1}>
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
        </Grid>
      </Grid>
    </form>
  );
}

//교수, 기간, 언어
const Filter = () => {
  return (
    <Grid 
      container 
      justifyContent="flex-end"
      alignItems="center"
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
        <Box sx={{ maxWidth: 150, minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">교수</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={'박수희'}>박수희</MenuItem>
              <MenuItem value={'박창섭'}>박창섭</MenuItem>
              <MenuItem value={'한혁'}>한혁</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ maxWidth: 150, minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">학기</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={1}>1학기</MenuItem>
              <MenuItem value={2}>2학기</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ maxWidth: 150, minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">언어</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={'C'}>C</MenuItem>
              <MenuItem value={'Java'}>Java</MenuItem>
              <MenuItem value={'Python'}>Python</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Grid>
  );
}

const LectureCard = () => {  
  const classes = useStyles();

  function joinClass() {
    if (window.confirm('해당 클래스에 참여할까요?')) {
      alert('참가하였습니다.');
      window.location.reload();
    }
  }

  return (
    <Card 
      sx={{ maxWidth: 426, maxHeight: 228 }}
      gutterBottom
    >
      <div className={styles.cardContainer}>
        <CardActions className={classes.CardActions}>
          <div onClick={joinClass} className={styles.joinButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#989898" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>  
          </div>
        </CardActions>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" component="div">
        프로그래밍 논리의 이해
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          박수희 / 1분반
        </Typography>
      </CardContent>
      </div>
    </Card>
  );
}

export default function TemporaryDrawer() {

  return (
      <Grid className={styles.container}>
        <Grid mb={8} mt={8}><Search /></Grid>
        <Grid mb={8} mr={8}><Filter /></Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} mb={4}>
            <LectureCard>1</LectureCard>
          </Grid>
          <Grid item xs={6}>
            <LectureCard>2</LectureCard>
          </Grid>
          <Grid item xs={6}>
            <LectureCard>3</LectureCard>
          </Grid>
          <Grid item xs={6}>
            <LectureCard>4</LectureCard>
          </Grid>
        </Grid>
      </Grid>
  );
}

// export default Lecture;
