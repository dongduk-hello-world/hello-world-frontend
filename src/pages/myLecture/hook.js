import axiosPromise from "../../services/axiosPromise";

export const getUser = async (userId) => {
    const userdata =  axiosPromise.get(`/users/${userId}`);
    return userdata;
}