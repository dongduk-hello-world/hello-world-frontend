import styles from "./style.module.scss";

import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/public_assets/logo/logo_black.png`} alt="logo_black"/>
      </div>
      <nav className={styles.menu}>
        <li>내 과목</li>
        <li>과목 찾기</li>
        {/* 삼항연산자(user_type == professor) */}
        <li>과목 개설</li>
      </nav>
      <div className={styles.navWrap}>
        <span>
        <Avatar sx={{ bgcolor: blue[500] }}>
          <FaceIcon />
        </Avatar>
        김이름/20202020
        </span>
        <span>
          <a><img src={`${process.env.PUBLIC_URL}/public_assets/logout.png`} alt="logout" className={styles.logout}/>로그아웃</a>
        </span>
      </div>
    </div>
  );
}

export default Header