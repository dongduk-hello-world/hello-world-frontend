import axiosPromise from "../../services/axiosPromise";
import dayjs from 'dayjs';

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
    if(dayjs(data.start_time).isAfter(dayjs(data.end_time))) {
        alert("응시 시작은 응시 종료보다 빨라야 합니다. \n응시 가능 시간을 다시 확인해주세요.");
        return;
    }
    axiosPromise.post('/assignments', data);
};