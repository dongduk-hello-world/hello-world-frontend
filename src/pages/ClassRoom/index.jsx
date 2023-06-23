import { useState, useEffect } from "react";
import { useNavigate, useLoaderData, redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Professor from './professor'
import Student from './student'

import { getUser, getAssignments } from "./hooks";
import { isLogin } from "../../services/axiosPromise";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

export const loader = async () => {
  if(!(await isLogin())) return redirect("/account");
  const userId = sessionStorage.getItem('userId');

  const data = {};
  data.user = await getUser(userId);

  data.assignments = (await getAssignments()).assignments;
  console.log(data);
  return data;
};

export default function ClassRoom() {
  let result;
  const navigate = useNavigate();
  let { user } = useLoaderData();
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Sidebar data={user}/>
      </Grid>
      <Grid item xs={9}>
        {user.type== '학생' ? <Student /> : <Professor />}
      </Grid>
    </Grid>
  );
}