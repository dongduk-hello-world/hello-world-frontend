import axiosPromise from "../../services/axiosPromise";

export const getSubjectList = async () => {
  const userId = 1
  const result = await axiosPromise.get(`/users/${userId}/subjects`);

  // let nameList = []
  // for (let i = 0; i < Object.keys(result).length; i++) {
  //   nameList.push(result[i]['className']);
  // }
  // console.log(nameList);
  return result;
}

export const getLoginedUser = async () => {
  const userId = sessionStorage.getItem('userId');
  const result = await axiosPromise.get(`/users/${userId}`);
  return result;
}

export const getAssignmentInfo = async (assignmentId) => {
  const { assignment } = await axiosPromise.get(`/assignments/${assignmentId}`);
  return assignment;
}

export const getResult = async (assignmentId, userId) => {
  console.log(userId);
  const result = await axiosPromise.get(`/assignments/${assignmentId}/results/${userId}`);
  return result;
}

export const getStudents = async (classId) => {
  const students = await axiosPromise.get(`/classes/${classId}/students`, []);
  return students;
}

export const getCodeData = async (assignmentId, userId, testId) => {
  const codeData = await axiosPromise.get(`/assignments/${assignmentId}/results/${userId}/code/${testId}`, { language: "c", code: "code" });
  return codeData;
}