import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Professor from './professor'
import Student from './student'

import { getUser } from "./hooks";

export default function Lecture() {
  let result;
  let [data, setData] = useState([]);

  useEffect(() => {
    // if(!(await isLogin())) return redirect("/account");
    const userId = Number(sessionStorage.getItem('userId'));

    console.log(userId);
    result = getUser(userId);

    console.log(result);
    result.then((info) => {
      setData(info);
      console.log(data);
    });
  },[]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar data={data}/>
      </Grid>
      <Grid item xs={9}>
        {data['type'] == '학생' ? <Professor /> : <Professor />}
      </Grid>
    </Grid>
  );
}