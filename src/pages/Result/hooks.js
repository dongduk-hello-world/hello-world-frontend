import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getResult = async () => {
  const assignmentId = 1;
  const userId = 1;
  const result = await axiosPromise.get(`/assignments/${assignmentId}/results/${userId}`);
  return result;
}