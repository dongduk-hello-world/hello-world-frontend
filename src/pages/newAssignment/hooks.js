import axiosPromise from "../../services/axiosPromise";

export const submit = (data) => {
    alert(JSON.stringify(data));
    axiosPromise.post('/assignments', data);
};