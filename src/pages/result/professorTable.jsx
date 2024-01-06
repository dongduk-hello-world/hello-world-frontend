import { useState } from 'react';
import { Fragment } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData( studentNumber, studentName, total) {

  return {
    studentNumber,
    studentName,
    total,
    history: [
      {
        name: '문제 1번의 제목',
        getScore: 30,
        maxScore: 50,
      },
      {
        name: '문제 2번의 제목',
        getScore: 40,
        maxScore: 50,
      },
    ],
  };
}

function Row(props) {
  const index = props.index;
  const row = props.row;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>{index + 1}</TableCell>
        <TableCell align="right">{row.studentNumber}</TableCell>
        <TableCell align="right">{row.studentName}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="center">
          <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                제출 기록
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>문제 번호</TableCell>
                    <TableCell>문제 이름</TableCell>
                    <TableCell align="right">득점</TableCell>
                    <TableCell align="right">배점</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={historyRow.date}>
                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell align="right">{historyRow.getScore}</TableCell>
                      <TableCell align="right">{historyRow.maxScore}</TableCell>
                      <TableCell align="right">
                        <Button variant="outlined" size="small">코드 확인</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const rows = [
  createData('20202020', '홍길동', 250),
  createData('20202021', '김민지', 230),
  createData('20202022', '춘식이', 180),
];

export function ProfessorTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>순위</TableCell>
            <TableCell align="right">학번</TableCell>
            <TableCell align="right">이름</TableCell>
            <TableCell align="right">총점</TableCell>
            <TableCell align="center">상세보기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}