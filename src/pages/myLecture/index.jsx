import Header from "components/header.jsx"
import NoLecture from "./noLecture.jsx";
import styles from "./style.module.scss";

import Lottie from 'lottie-react';
import { lottie } from 'assets/lottie';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default () => {
  return (
    <div>
      <Header />
      <NoLecture />
    </div>
  );
};
