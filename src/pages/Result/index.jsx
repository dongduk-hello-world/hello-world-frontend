
import { redirect, useLoaderData } from "react-router-dom";
import { getLoginedUser, getResult, getAssignmentInfo, getStudents } from "./hooks";

import StudentResult from "./Student";
import ProfessorResult from "./Professor";

export const loader = async ({ params }) => {
    const assignmentId = params.assignmentId;
    const user = await getLoginedUser();

    if (user.type === "학생") {
        const data = {};

        data.user = user;
        data.assignment = await getAssignmentInfo(assignmentId);
        data.result = await getResult(assignmentId, user.userId);

        console.log(data);
        return data;
    }

    if (user.type === "교수") {
        const data = {};

        data.user = user;
        data.assignment = await getAssignmentInfo(assignmentId);
        
        const studentList = await getStudents(data.assignment.classId);
        data.results = [];
        for(let i = 0; i < studentList.length; i++) {
            const result = await getResult(assignmentId, studentList[i].userId);
            if(result) data.results.push(result);
        }
        
        return data;
    }

    return redirect("/account");
}

export default () => {
    const { user } = useLoaderData();

    if (user.type === "학생") {
         return <StudentResult/>
    }

    if (user.type === "교수") {
        return <ProfessorResult/>
   }
}