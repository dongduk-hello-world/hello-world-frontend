import * as React from 'react';
import PropTypes from 'prop-types';
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

function Row({ row }) {
  const { user, score, totalScore, tests } = row;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          1
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email.split('@')[0]}</TableCell>
        <TableCell>{score} / {totalScore}</TableCell>
        <TableCell>버튼</TableCell>
        <TableCell>
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
                세부 점수
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>문제</TableCell>
                    <TableCell>max score</TableCell>
                    <TableCell align="right">받은 점수</TableCell>
                    <TableCell align="right">소스코드 보기</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tests.map((test) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {test.testName}
                      </TableCell>
                      <TableCell>{test.maxScore}</TableCell>
                      <TableCell align="right">{test.score}</TableCell>
                      <TableCell align="right">
                        {'버튼'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ScoreTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>순위</TableCell>
            <TableCell>학생이름</TableCell>
            <TableCell>학번</TableCell>
            <TableCell>총점</TableCell>
            <TableCell>소스코드보기</TableCell>
            <TableCell>문제별 점수확인</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <Row key={`assignment_result${i}`} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}