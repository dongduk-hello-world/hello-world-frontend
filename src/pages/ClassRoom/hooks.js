import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
  const result = await axiosPromise.get(`/users/${userId}`);
  // console.log(result);
  return result;
}

