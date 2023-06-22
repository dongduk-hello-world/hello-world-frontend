import axiosPromise from "../../services/axiosPromise";

export const loadClassData = async (classId) => {
    let classData = await axiosPromise.get(`/classes/${classId}`);
    if(!classData) {
        classData = {
            className: "알고리즘"
        }
    }
    return classData;
};

export const submit = (data) => {
    alert(JSON.stringify(data));
    axiosPromise.post('/assignments', data);
};