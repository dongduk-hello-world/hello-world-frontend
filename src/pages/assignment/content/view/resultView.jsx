import styles from "../style.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, time, result, seconds, memory, length, link) {
  return { id, time, result, seconds, memory, length, link };
}
const rows = [];
for (let i = 0; i < 10; i++) {
  rows.push(
    createData(
      i,
      "2023-03-19 AM 11:00",
      "testcase 6/6",
      "몇초",
      "이정도",
      "이정도",
      "코드 확인"
    )
  );
}

export default () => {
  return (
    <div className={styles.view}>
      {/* <div>dkdkdk</div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>제출 번호</TableCell>
              <TableCell align="center">제출 시각</TableCell>
              <TableCell align="center">결과</TableCell>
              <TableCell align="center">실행 시간</TableCell>
              <TableCell align="center">메모리</TableCell>
              <TableCell align="center">코드 길이</TableCell>
              <TableCell align="center">코드 확인</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.result}</TableCell>
                <TableCell align="center">{row.seconds}</TableCell>
                <TableCell align="center">{row.memory}</TableCell>
                <TableCell align="center">{row.length}</TableCell>
                <TableCell align="center">{row.link}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
