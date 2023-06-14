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

    const changeYear = (event) => {
      setYear(event.target.value);
    };
    const changeSemester = (event) => {
        setSemester(event.target.value);
    };

    return ( 
        // <FormControl>
        <Container maxWidth="sm" className={styles.formContainer}>
            <form className={styles.form}>
                <Box>
                    <InputLabel htmlFor="class-name">강의명</InputLabel>
                    <Input id="class-name" aria-describedby="class-name-helper-text" fullWidth="true" />
                    <FormHelperText id="class-name-helper-text">강의 이름을 입력해주세요</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="professor">교수</InputLabel>
                    <Input id="professor" aria-describedby="professor-helper-text" fullWidth="true" readOnly value="박창섭"/>
                </Box>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <InputLabel htmlFor="year-select-label">학년도</InputLabel>
                            <FormControl sx={{ minWidth: 200 }}>
                                <Select
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
                            <FormControl sx={{ minWidth: 200 }}>
                                <Select
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
                    </Stack>
                    <FormHelperText id="period-helper-text">학년도와 학기를 선택해주세요</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="language">언어</InputLabel>
                    <LanguageSelect />
                    <FormHelperText id="language-helper-text">테스트에서 사용될 언어를 선택(복수 선택 가능)</FormHelperText>
                </Box>
                <Box>
                    <InputLabel htmlFor="invite">초대코드</InputLabel>
                    <Input id="invite" aria-describedby="invite-helper-text" fullWidth="true" />
                    <FormHelperText id="invite-helper-text">초대코드를 입력해주세요</FormHelperText>
                </Box>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">제출</Button>
                    <Button variant="outlined">취소</Button>
                </Stack>
            </form>
        </Container>
            // </FormControl>
    );
}