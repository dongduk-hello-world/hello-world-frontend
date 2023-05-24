import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import {
  CheckCircleOutline,
  RemoveCircleOutline,
  RadioButtonUnchecked,
} from "@mui/icons-material";

export default ({ idx, setIdx }) => {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => (
          <Tab
            key={`testNav_${idx}`}
            label={`문제 ${idx + 1}`}
            icon={idx < 4 ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Box>
  );
};
