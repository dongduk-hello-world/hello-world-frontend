import styles from "./style.module.scss";
import { AppBar, Toolbar, Button } from "@mui/material";

export default () => {
    return (
        <form>
            <AppBar className={styles.header}>
                <Toolbar position="fixed">
                <div>알고리즘: 중간고사</div>
                </Toolbar>
            </AppBar>
            <div className={styles.content}>
                <div>
                    <div className={styles.nav}></div>
                    <div className={styles.box}></div>
                </div>
                <div>
                    <div className={styles.nav}></div>
                    <div className={styles.box}></div>
                </div>
            </div>
        </form>
    );
}