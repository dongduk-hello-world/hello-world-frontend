import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { Chip } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";

import styles from "./style.module.scss";

import dayjs from 'dayjs';
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

export default () => {
  const { testEndTime } = useLoaderData();
  const [ interval, settedInterval ] = useState(false);
  const [ timer, setTimer ] = useState("--:--:--");

  useEffect(() => { 
    if(!interval) {
      settedInterval(true);

      const id = setInterval(() => {
        const cur = dayjs();
        const duration = dayjs.duration(testEndTime.diff(cur));

        let hours = duration.$d.days*24 + duration.$d.hours;
        if(hours < 10) hours = "0" + hours;
        
        let minutes = duration.$d.minutes;
        if(minutes < 10) minutes = "0" + minutes;

        let seconds = duration.$d.seconds;
        if(seconds < 10) seconds = "0" + seconds;

        setTimer(`${hours}:${minutes}:${seconds}`);

        if (Number(hours) <= 0 && Number(minutes) <= 0 && Number(seconds) <= 0) {
          clearInterval(id);
          alert("시험이 끝났습니다!");
        }
      }, 500);
    }
    
    
  });

  return (
    <Chip
      className={styles.timer}
      icon={<TimerIcon color="action" />}
      label={timer}
    />
  );
};
