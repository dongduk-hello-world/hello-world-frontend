import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getSubjectList = async () => {
  const userId = 1
  const result = await axiosPromise.get(`/users/${userId}/subjects`);

  let nameList = []
  for (let i = 0; i < Object.keys(result).length; i++) {
    nameList.push(result[i]['className']);
  }
  console.log(nameList);
  return nameList;
}

