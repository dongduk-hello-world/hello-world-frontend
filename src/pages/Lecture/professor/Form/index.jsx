import { useState } from "react";

import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styles from "./style.module.scss";
import LanguageSelect from "./languageSelect.jsx";

export default function CreateClassForm() {

    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [divide, setDivide] = useState('');

    const changeYear = (event) => {
      setYear(event.target.value);
    };
    const changeSemester = (event) => {
        setSemester(event.target.value);
    };
    const changeDivide = (event) => {
        setDivide(event.target.value);
    }

    return ( 
        // <FormControl>
        <Container maxWidth="sm" className={styles.formContainer}>
            <form className={styles.form}>
                <Box>
                    <InputLabel htmlFor="class-name">강의명</InputLabel>
                    <Input required id="class-name" aria-describedby="class-name-helper-text" fullWidth="true" />
                    <FormHelperText id="class-name-helper-text">강의 이름을 입력해주세요</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="class-description">세부 설명</InputLabel>
                    <Input required id="class-description" aria-describedby="class-description-helper-text" fullWidth="true" />
                    <FormHelperText id="class-description-helper-text">간단한 강의설명 입력해주세요</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="professor">교수</InputLabel>
                    <Input required id="professor" aria-describedby="professor-helper-text" fullWidth="true" readOnly value="박창섭"/>
                </Box>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <InputLabel htmlFor="year-select-label">학년도</InputLabel>
                            <FormControl sx={{ minWidth: 150 }}>
                                <Select
                                    required 
                                    labelId="year-select-label"
                                    id="year-select"
                                    value={year}
                                    label="학년도"
                                    onChange={changeYear}
                                >
                                    <MenuItem value={2023}>2023</MenuItem>
                                    <MenuItem value={2024}>2024</MenuItem>
                                    <MenuItem value={2025}>2025</MenuItem>
                                </Select> 
                            </FormControl>
                        </Box>
                        <Box>
                            <InputLabel htmlFor="semester-select-label">학기</InputLabel>
                            <FormControl sx={{ minWidth: 150 }}>
                                <Select
                                    required 
                                    labelId="semester-select-label"
                                    id="demo-simple-select"
                                    value={semester}
                                    label="학기"
                                    onChange={changeSemester}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                </Select> 
                            </FormControl>
                        </Box>
                        <Box>
                            <InputLabel htmlFor="divide-select-label">분반</InputLabel>
                            <FormControl sx={{ minWidth: 150 }}>
                                <Select
                                    required 
                                    labelId="divide-select-label"
                                    id="demo-simple-select"
                                    value={divide}
                                    label="분반"
                                    onChange={changeDivide}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={2}>3</MenuItem>
                                    <MenuItem value={2}>4</MenuItem>
                                    <MenuItem value={2}>5</MenuItem>
                                </Select> 
                            </FormControl>
                        </Box>
                    </Stack>
                    <FormHelperText id="period-helper-text">학년도와 학기를 선택해주세요</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="language">언어</InputLabel>
                    <LanguageSelect required />
                    <FormHelperText id="language-helper-text">테스트에서 사용될 언어를 선택(복수 선택 가능)</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="invite">초대코드</InputLabel>
                    <Input required id="invite" aria-describedby="invite-helper-text" fullWidth="true" />
                    <FormHelperText id="invite-helper-text">초대코드를 입력해주세요</FormHelperText>
                </Box>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type="submit">제출</Button>
                    <Button variant="outlined">취소</Button>
                </Stack>
            </form>
        </Container>
    );
}