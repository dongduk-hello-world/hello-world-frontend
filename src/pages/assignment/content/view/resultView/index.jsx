import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import UpdateIcon from '@mui/icons-material/Update';
import Link from '@mui/material/Link';

import styles from "../style.module.scss";
import highStyles from "./style.module.scss";

import { getResult } from "../../../hooks";

import CodeModal from "./codeModal";

export default ({ testIdx }) => {
    const { tests } = useLoaderData();
    const [highScore, setHighScore] = useState(null);
    const [rows, setRows] = useState([]);
    const [codeModal, setCodeModal] = useState([]);
    const [highscoreModal, setHighScoreModal] = useState(false);

    const refresh = async () => {
        const testId = tests[testIdx].testId;
        const result = await getResult(testId);
        setHighScore(result.highScore);
        console.log(result.highScore.score);
        setRows(result.submits);
    };
    // useEffect(() => { refresh() });
    useEffect(() => { 
        refresh();
        setCodeModal([...new Array(rows.length).fill(false)]);
        setHighScoreModal(false);
    }, [testIdx]);

    return (
        <div className={styles.view}>
            <div className={highStyles.highScore}>
                <span>성적은 제출된 결과들 중에서 최고점으로 반영됩니다.</span>
                {
                    highScore && highScore.score && (
                    <>
                        <label>현재 최고 점수: {highScore.score}</label>
                        <Link onClick={() => {
                            setHighScoreModal(true);
                        }}>코드 보기</Link>
                        <CodeModal 
                            open={highscoreModal} 
                            onClose={() => setHighScoreModal(false)}
                            highScore={highScore.code} />
                    </>)
                }
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>제출 번호</TableCell>
                    <TableCell align="center">제출 시각</TableCell>
                    <TableCell align="center">언어</TableCell>
                    <TableCell align="center">런타임</TableCell>
                    <TableCell align="center">코드 길이</TableCell>
                    <TableCell align="center">점수</TableCell>
                    <TableCell align="center">코드 보기</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                    <TableRow
                        key={row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {i}
                        </TableCell>
                        <TableCell align="center">{row.submitTime}</TableCell>
                        <TableCell align="center">{row.language}</TableCell>
                        <TableCell align="center">{row.runTime}</TableCell>
                        <TableCell align="center">{row.fileSize}</TableCell>
                        <TableCell align="center">{row.score}</TableCell>
                        <TableCell align="center">
                            <Link onClick={() => {
                                codeModal[i] = true;
                                setCodeModal([...codeModal]);
                            }}>코드 보기</Link>
                        </TableCell>
                        <CodeModal 
                            open={codeModal[i]} onClose={() => setCodeModal([...new Array(rows.length).fill(false)])}
                            highScore={row}/>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <IconButton size="large" onClick={refresh}
                style={{
                    position: "fixed",
                    bottom: "85px",
                    right: "100px",
                    background: "#D3D3D3"
                }}
            >
                <UpdateIcon fontSize="inherit" />
            </IconButton>
        </div>
    );
};
