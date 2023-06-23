import { useState } from "react";
import { useLoaderData, useNavigate, redirect } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

import Nav from "./nav";
import AssignmentInput from "./assignmentInput";
import TestMarkdownInput from "./testMarkdownInput";
import TestcaseInput from "./testcaseInput";

import styles from "./style.module.scss";

import { ContextProvider } from "./contexts";
import { loadClassData, submit } from "./hooks";

import { isLogin } from "../../services/axiosPromise";

export const loader = async ({ params }) => {
    if(!(await isLogin())) return redirect("/account");

    const classId = params.classId;
    const data = await loadClassData(classId);
    return data;
};

export default () => {
    const navigate = useNavigate();
    const { classId, className } = useLoaderData(); 
    const [formData, setFormData] = useState({});
    const [testIdx, setTestIdx] = useState(0);

    return (
        <ContextProvider classId={classId} formData={[formData, setFormData]}>
            <form>
                <AppBar className={styles.header}>
                    <Toolbar position="fixed">
                    <div>{className}: {formData.name}</div>
                    <Button color="secondary" variant="contained" 
                        onClick={() => {
                            if(window.confirm("시험을 생성합니다.")) {
                                submit(formData);
                                navigate(`/classes/${classId}`, { replace: true });
                            }
                        }}>
                        시험 생성
                    </Button>
                    </Toolbar>
                </AppBar>
                <div className={styles.content}>
                    <div>
                        <Nav idx={testIdx} setIdx={setTestIdx}/>
                        <>
                            {testIdx === 0 
                                ? <AssignmentInput/> 
                                : <TestMarkdownInput idx={testIdx-1} onDelete={() => {
                                    formData.tests.splice(testIdx-1, 1);
                                    setFormData(formData);
                                    setTestIdx(testIdx-1);
                                }}/>}
                        </>
                    </div>
                    <div>
                        <div className={styles.nav}/>
                        <>
                            {testIdx === 0 
                                ? <div className={styles.disabledBox} disabled /> 
                                : <TestcaseInput idx={testIdx-1} />}
                        </>
                    </div>
                </div>
            </form>
        </ContextProvider>
        
    );
}