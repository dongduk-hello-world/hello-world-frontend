import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getSubjectList = async () => {
  const userId = 1
  const result = await axiosPromise.get(`/users/${userId}/subjects`);

  // let nameList = []
  // for (let i = 0; i < Object.keys(result).length; i++) {
  //   nameList.push(result[i]['className']);
  // }
  // console.log(nameList);
  return result;
}

export const getResult = async () => {
  const assignmentId = 1;
  const userId = 1;
  const result = await axiosPromise.get(`/assignments/${assignmentId}/results/${userId}`);
  return result;
}