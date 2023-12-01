import styles from "./style.module.scss";

import Grid from '@mui/material/Unstable_Grid2'; 

const Header = () => {
  return (
    <Grid 
      container 
      className={styles.header} 
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid xs={2}  className={styles.logo}>Helloworld</Grid>
      <Grid 
        container
        xs={7} 
        justifyContent="space-evenly"
      >
        <span>내 과목</span>
        <span>과목 찾기</span>
      </Grid>
      <Grid 
        container
        xs={3} 
        justifyContent="space-evenly"
      >
        <span>id / 이름</span>
        <span>로그아웃</span>
      </Grid>
    </Grid>
  );
}

export default Header