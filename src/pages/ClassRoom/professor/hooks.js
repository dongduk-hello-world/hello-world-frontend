import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../../services/axiosPromise";
import {axios} from 'axios';


export const getClassInfo = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}`);
  return result;
}

export const getStudents = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}/students`);
  console.log("수강생 리스트");
  console.log(result);
  return result;
}

export const getAssignments = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}/assignments`);
  return result;
}

export const deleteStudent = async (classId, userId) => {
  // const result = await axiosPromise.delete(`/classes/${classId}/students/${userId}`);
  // console.log(result);
  // return result;

  const class_id = Number(classId)
  const user_id = Number(userId);

  var axios = require('axios');

  var config = {
    method: 'delete',
    url: `http://localhost:8080/classes/${class_id}/students/${user_id}`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

}