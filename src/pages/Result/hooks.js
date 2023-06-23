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
  const result = await axiosPromise.get(`/users/${userId}`, { userId: 10, type: "학생" });
  return result;
}

export const getAssignmentInfo = async (assignmentId) => {
  const { assignment } = await axiosPromise.get(`/assignments/${assignmentId}`, { assignment: { classId: 20001, name: "중간고사" } });
  return assignment;
}

export const getResult = async (assignmentId, userId) => {
  console.log(userId);
  const result = await axiosPromise.get(`/assignments/${assignmentId}/results/${userId}`, {
    totalScore: 100, score: 50, tests: [{ name: "문제 1", maxScore: 50, score: 25 }, { name: "문제 2", maxScore: 50, score: 25}]
  });
  return result;
}

export const getStudents = async (classId) => {
  const students = await axiosPromise.get(`/classes/${classId}/students`, []);
  return students;
}