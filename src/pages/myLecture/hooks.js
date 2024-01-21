import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
    const userdata =  axiosPromise.get(`/users/${userId}`);
    return userdata;
}

export const getLecture = async (userId) => {
    const lecturedata =  axiosPromise.get(`/users/${userId}/subjects`);
    return lecturedata;
}

export const deleteLecture = async (lecture_id) => {
    const result = axiosPromise.delete(`/classes/${lecture_id}`);
}

export const withdrawLecture = async (lecture_id, user_id) => {
    const result = axiosPromise.delete(`/classes/${lecture_id}/students/${user_id}`);
}