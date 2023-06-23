import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import Timer from "./timer";

import styles from "./style.module.scss";
import { AppBar, Toolbar, Button } from "@mui/material";

import { close } from "../hooks";

export default () => {
  const navigate = useNavigate();
  const { name, lecture, assignmentId } = useLoaderData();

  return (
    <AppBar className={styles.header}>
      <Toolbar position="fixed">
        <div>{lecture.className}: {name}</div>
        <div>
          <Timer />
          <Button 
            color="secondary" 
            variant="contained"
            onClick={async () => {
              close(assignmentId);
              navigate(`/classes/${lecture.classId}`, {replace: true}); // url 이동
            }}
            >
            시험 종료
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
