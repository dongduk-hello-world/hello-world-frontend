import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="문제 1" />
        <Tab label="문제 2" />
        <Tab label="문제 3" />
        <Tab label="문제 4" />
        <Tab label="문제 5" />
        <Tab label="문제 6" />
        <Tab label="문제 7" />
        <Tab label="문제 8" />
        <Tab label="문제 9" />
        <Tab label="문제 10" />
      </Tabs>
    </Box>
  );
}
