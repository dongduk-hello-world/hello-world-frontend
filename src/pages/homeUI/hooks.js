import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getSubjectList = async (userId) => {
  const result = await axiosPromise.get(`/users/${userId}/subjects`);
  return result;
}

