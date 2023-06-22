import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

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