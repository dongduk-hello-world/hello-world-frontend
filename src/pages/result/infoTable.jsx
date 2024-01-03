import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  return (
    <Box
      sx={{
          width: 1/1,
          mb: 10
      }}
    >
      <Paper 
        elevation={3}
        sx={{
          p: 5,
          minHeight: 150
        }}>
          test
        </Paper>
    </Box>
  );
}