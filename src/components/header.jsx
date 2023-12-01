import styles from "./style.module.scss";

import Grid from '@mui/material/Unstable_Grid2'; 
import Stack from '@mui/material/Stack';

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
        alignItems="center"
      >
        <span>id / 이름</span>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          로그아웃
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header