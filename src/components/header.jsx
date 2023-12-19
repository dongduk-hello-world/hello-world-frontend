import styles from "./style.module.scss";

import Grid from '@mui/material/Unstable_Grid2'; 
import Stack from '@mui/material/Stack';

const Header = () => {
  return (
    <Grid 
      container 
      className={styles.header} 
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid 
        xs={2}  
        className={styles.logo} 
        justifyContent="left"
      >
        Helloworld
      </Grid>
      <Grid 
        container
        xs={7} 
        justifyContent="space-evenly"
      >
        <span>내 과목</span>
        <span>과목 찾기</span>
        {/* 삼항연산자(user_type == professor) */}
        <span>과목 개설</span>
      </Grid>
      <Grid 
        container
        xs={3} 
        justifyContent="right"
        alignItems="center"
      >
        <span className={styles.profile}>id / 이름</span>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <img src={`${process.env.PUBLIC_URL}/public_assets/logout.png`} alt="logout"/>
          로그아웃
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header