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

// {"classId":1,"name":"중간고사","startTime":"2023-5-22 1:15","endTime":"2023-5-26 2:15","testTime":"01:00","tests":[{"name":"A + B","description":"# A + B\n\nA와 B를 더해보세요","score":50,"testcases":[{"input":"3 5","output":"8"},{"input":"2 6","output":"8"},{"input":"4 8","output":"12"},{"input":"4 4","output":"8"},{"input":"1 1","output":"2"}]},{"name":"A - B","description":"#  A - B\n\nA에서 B를 빼보세요","score":50,"testcases":[{"input":"5 1","output":"4"},{"input":"5 2","output":"3"},{"input":"6 1","output":"5"},{"input":"7 2","output":"5"},{"input":"5 5","output":"0"}]}]}