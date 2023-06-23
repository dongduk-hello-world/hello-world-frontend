import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../../../services/axiosPromise";

export const submitForm = async (data) => {
  const result = await axiosPromise.post(`/classes`, data);
  // console.log(result);
  // return result;
}