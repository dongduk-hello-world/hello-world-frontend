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

// function createData(name, stu_no, score, scoreList) {
//   return {
//     name,
//     stu_no, 
//     score,
//     scoreList: [
//       {
//         name: '1번문제',
//         maxScore: '50',
//         score: '40',

//       }
//     ]
//   }
//   // return {
//   //   name,
//   //   calories,
//   //   fat,
//   //   carbs,
//   //   protein,
//   //   price,
//   //   history: [
//   //     {
//   //       date: '2020-01-05',
//   //       customerId: '11091700',
//   //       amount: 3,
//   //     },
//   //     {
//   //       date: '2020-01-02',
//   //       customerId: 'Anonymous',
//   //       amount: 1,
//   //     },
//   //   ],
//   // };
// }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          1
        </TableCell>
        <TableCell>김땡땡</TableCell>
        <TableCell>20201111</TableCell>
        <TableCell>250 / 300</TableCell>
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
                  {/* {row.history.map((historyRow) => ( */}
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {'문제 이름'}
                      </TableCell>
                      <TableCell>{50}</TableCell>
                      <TableCell align="right">{40}</TableCell>
                      <TableCell align="right">
                        {'버튼'}
                      </TableCell>
                    </TableRow>
                  {/* ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const scoreList = [

// ];

// const rows = [
//   createData('김땡땡', '20201111', 300, scoreList),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function ScoreTable() {
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
          {/* {rows.map((row) => ( */}
            <Row key={'ddd'} row={'row'} />
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}