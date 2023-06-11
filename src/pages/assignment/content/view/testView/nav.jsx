import { useContext } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import {
  CheckCircleOutline,
  RemoveCircleOutline,
  RadioButtonUnchecked,
} from "@mui/icons-material";

import { TestIdxContext } from "../../../contexts";

export default ({ tests }) => {
  const [idx, setIdx] = useContext(TestIdxContext);

  const handleChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <Box
      sx={{
        maxHeight: { sm: 50 },
        maxWidth: { xs: 320, sm: 880 },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={idx}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tests.map((val, idx) => (
          <Tab
            key={`testNav_${idx}`}
            label={`문제 ${idx + 1}`}
            icon={ <RadioButtonUnchecked /> }
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Box>
  );
};
