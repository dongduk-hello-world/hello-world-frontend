import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
  const result = await axiosPromise.get(`/users/${userId}`);
  return result;
}

export const getLectureLsit = async () => {
  const result = await axiosPromise.get(`/classes`);
  return result;
}

export const joinLecture = async (classId) => {
  const userId = sessionStorage.getItem('userId');
  const result = await axiosPromise.post(`/classes/${classId}/students/${userId}`);
}