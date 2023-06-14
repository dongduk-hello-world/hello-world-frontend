import { useState } from "react";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Student from './Student'

export default function Lecture() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} minHeight="100vh">
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Student />
      </Grid>
    </Grid>
  );
}