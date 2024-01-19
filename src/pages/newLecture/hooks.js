import axiosPromise from "../../services/axiosPromise";

export const addLecture = async (professor_id, divide, invite_code, name, description, period, filterterm, filterprofessor, filterlanguage) => {
    console.log(professor_id, divide, invite_code, name, description, period, filterterm, filterprofessor, filterlanguage);
    await axiosPromise.post("/classes", {
        // "professor_id": professor_id, 
        "divide": Number(divide),
        "invite_code": invite_code,
        "name": name,
        "description": description,
        "period": period,
        "filterterm": filterterm,
        "filterprofessor": filterprofessor,
        "filterlanguage": filterlanguage
    });
}