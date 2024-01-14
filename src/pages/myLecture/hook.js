import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
    const userdata =  axiosPromise.get(`/users/${userId}`);
    return userdata;
}

export const getLecture = async (userId) => {
    const lecturedata =  axiosPromise.get(`/users/${userId}/subjects`);
    return lecturedata;
}