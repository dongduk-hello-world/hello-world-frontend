import axiosPromise from "../../services/axiosPromise";
import dayjs from 'dayjs';

export const loadClassData = async (classId) => {
    let classData = await axiosPromise.get(`/classes/${classId}`);
    if(!classData) {
        classData = {
            className: "알고리즘"
        }
    }
    console.log(classData);
    return classData;
};

export const submit = (data) => {
    if(dayjs(data.start_time).isAfter(dayjs(data.end_time))) {
        alert("응시 시작은 응시 종료보다 빨라야 합니다. \n응시 가능 시간을 다시 확인해주세요.");
        return;
    }
    console.log(data);
    axiosPromise.post('/assignments', data);
};

export const setFormat = (value) => {
    const M = value.$M+1 < 10 ? "0"+(value.$M+1).toString() : value.$M+1;
    const D = value.$D < 10 ? "0"+(value.$D).toString() : value.$D;
    const H = value.$H < 10 ? "0"+(value.$H).toString() : value.$H;
    const m = value.$m < 10 ? "0"+(value.$m).toString() : value.$m;
    const s = value.$s < 10 ? "0"+(value.$s).toString() : value.$s;

    return `${value.$y}/${M}/${D}T${H}:${m}:${s}`;
}