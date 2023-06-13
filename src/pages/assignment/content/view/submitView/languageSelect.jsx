import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default ({ languageIdx, onChange }) => {
    return (
        <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={languageIdx}
                onChange={(e) => onChange(e.target.value)}
                >
                <MenuItem value={0}>C</MenuItem>
                <MenuItem value={1}>Java</MenuItem>
                <MenuItem value={2}>Python</MenuItem>
            </Select>
        </FormControl>
    );
}