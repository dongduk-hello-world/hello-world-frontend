import { useState } from "react";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Professor from './professor'
import Student from './student'

export default function Lecture() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Student />
      </Grid>
    </Grid>
  );
}