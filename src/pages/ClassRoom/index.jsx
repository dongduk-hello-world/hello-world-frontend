import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";

import * as React from 'react';
import Grid from '@mui/material/Grid';

import Sidebar from '../homeUI'
import Professor from './professor'
import Student from './student'

import { getClassInfo, getAssignmentList, getStudents} from "./hooks";
import { getUser } from "./hooks";
import { isLogin } from "../../services/axiosPromise";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

export const loader = async ({ params }) => {
  const classId = params.classId;
  
  const data = {};
  data.lecture = await getClassInfo(classId);
  data.assignmentList = await getAssignmentList(classId);

  console.log(data);
  return data;
}

export default function ClassRoom() {
  let result;
  let [data, setData] = useState([]);
  const navigate = useNavigate();

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
        {data['type'] == '학생' ? <Student data={data} /> : <Professor data={data} />}
      </Grid>
    </Grid>
  );
}