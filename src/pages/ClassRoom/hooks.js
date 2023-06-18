import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getClassInfo = async () => {
  const classId = 1
  const result = await axiosPromise.get(`/classes/${classId}`);
  // console.log(result);
  // let nameList = []
  // for (let i = 0; i < Object.keys(result).length; i++) {
  //   nameList.push(result[i]['className']);
  // }
  // console.log(nameList);
  // return nameList;
  return result;
}
