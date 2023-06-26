import { useLoaderData, redirect } from "react-router-dom";
import styles from "./styles.module.scss";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Professor from './professor'
import Student from './student'

import { getUser, getLectureList } from "./hooks";
import { isLogin } from "../../services/axiosPromise";

export const loader = async () => {
  if(!(await isLogin())) return redirect("/account");
  const userId = sessionStorage.getItem('userId');
  
  const data = {};
  data.user = await getUser(userId);

  data.lecture_list = (await getLectureList()).classes;
  console.log(data);
  return data;
};

export default function Lecture() {
  let { user } = useLoaderData();

  return (
    <Grid container className={styles.container}>
      <Grid item xs={3}>
        <Sidebar data={user}/>
      </Grid>
      <Grid item xs={9}>
        {user.type== '학생' ? <Student/> : <Professor/>}
      </Grid>
    </Grid>
  );
}