import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getClassInfo = async () => {
  const classId = 1
  const result = await axiosPromise.get(`/classes/${classId}`);
  return result;
}

export const getStudents = async () => {
  const classId = 1
  const result = await axiosPromise.get(`/classes/${classId}/students`);
  return result;
}