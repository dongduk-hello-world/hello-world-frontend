import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('과제 1', 159, 6.0, 'y'),
  createData('과제 2', 237, 9.0, 'n'),
  createData('중간고사 오답 문제풀이', 262, 16.0, 'n'),
  createData('과제 3', 305, 3.7, 'y'),
  createData('기말고사 오답 문제풀이', 356, 16.0, 'y'),
];

export default function BasicTable() {
  return (
    <TableContainer sx={{mb: 5,}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: 20, fontWeight: "bold"}}>과제명</TableCell>
            <TableCell sx={{fontSize: 20, fontWeight: "bold"}} align="right">시작 일자</TableCell>
            <TableCell sx={{fontSize: 20, fontWeight: "bold"}} align="right">종료 일자</TableCell>
            <TableCell sx={{fontSize: 20, fontWeight: "bold"}} align="right">제출 여부</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}