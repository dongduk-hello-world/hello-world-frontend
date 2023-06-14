import { useState } from "react";
import { useStyles } from "./styles";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LectureForm from "./Form";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Grid>
  );
}

const LectureCard = () => {  
  return (
    <Card 
      sx={{ maxWidth: 426, maxHeight: 228 }}
      gutterBottom
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="../index.jsx">Learn More</a></Button>
      </CardActions>
    </Card>
  );
}

export default function TemporaryDrawer() {
  
  const [isMain, setMain] = useState(true);
  
  function newLectrue() {
    console.log("click!");
    setMain(false);
  } 

  //new Lecture Button
  const NewLectureButton = () => {
    const classes = useStyles();
  
    return (
      <Box className={classes.newButtonBox}>
        <Box sx={{ fontSize: 'h3.fontSize', m: 1 }}>새로운 클래스를 개설해보세요!</Box>
        <Button 
          variant="contained"
          onClick={newLectrue}
        >Contained</Button>
      </Box>
    );
  }

  //main
  const ProfMain = () => {
    return (
      <Grid>
        <Grid mb={8} mt={8}><Search /></Grid>
        <Grid mb={8} mr={8}><NewLectureButton /></Grid>
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

  if ({isMain}) return <ProfMain />;
  else return <LectureForm />;
}
