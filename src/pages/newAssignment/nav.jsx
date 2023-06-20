import { useContext, useEffect } from "react";
import { Tabs, Tab, IconButton } from "@mui/material";
import { Assignment, AddCircleRounded } from '@mui/icons-material';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default ({ idx, setIdx }) => {
    const [formData, setFormData] = useContext(FormDataContext);

    const testCreate = () => {
        let tests = formData.tests;
        tests.push({
            name: `문제 ${tests.length+1}`,
            description: `# 문제 ${tests.length+1}`,
            score: 0,
            testcases: [{ input: "1", output: "[1, 2, 3, 4]" }]
        });
        setFormData({...formData, tests});
        setIdx(tests.length);
    }

    return (
        <div className={styles.nav}>
            <Tabs
                value={idx}
                onChange={(event, newValue) => {
                    setIdx(newValue);
                }}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >   
                <Tab label="시험 개요"/>
                {formData.tests 
                    && formData.tests.map(test => 
                        <Tab 
                            label={test.name} 
                            icon={ <Assignment /> }
                            iconPosition="start"/>
                )}
                 <IconButton size="large" onClick={testCreate}>
                    <AddCircleRounded color='primary'/>
                </IconButton>
            </Tabs>
        </div>
    );
}