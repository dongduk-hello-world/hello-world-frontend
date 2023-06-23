import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";
import axios from 'axios';


export const getClassInfo = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}`);
  return result;
}

export const getStudents = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}/students`);
  return result;
}

export const getAssignments = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}/assignments`);
  return result;
}

export const deleteStudent = async (classId, userId) => {
  const result = await axiosPromise.delete(`/classes/${classId}/students/${userId}`);
  console.log(result);
  return result;
  // var axios = require('axios');

  // var config = {
  //   method: 'delete',
  //   url: `/classes/${classId}/students/${userId}`,
  //   headers: { }
  // };
  
  // axios(config);
}