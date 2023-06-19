import { useContext, useEffect } from "react";
import { Tabs, Tab, IconButton } from "@mui/material";
import { Assignment, AddCircleRounded } from '@mui/icons-material';

import styles from "./style.module.scss";

import { FormDataContext } from "./contexts";

export default ({ idx, setIdx }) => {
    const [formData, setFormData] = useContext(FormDataContext);

    useEffect(() => {
        if(!formData.tests) {
            testCreate();
        }
    });

    const testCreate = () => {
        let tests = formData.tests;
        if(!tests) tests = [];
        tests.push({
            name: `문제 ${tests.length+1}`,
            description: "",
            score: 0,
            testcases: []
        });
        setFormData({...formData, tests});
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