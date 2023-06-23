import { useState, useEffect, useRef } from "react";
import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
  const result = await axiosPromise.get(`/users/${userId}`);
  // console.log(result);
  return result;
}

export const getAssignments = async (classId) => {
  const result = await axiosPromise.get(`/classes/${classId}/assignments`);
  return result;
}