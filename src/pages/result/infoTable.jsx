import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function BasicTable() {
  return (
    <Box
      sx={{
          width: 1/1,
          mb: 10
      }}
    >
      <Paper elevation={3}
        sx={{
          p: 5,
          minHeight: 150
        }}
      >
          <Typography variant='h3'>[20202020] 님의 [과제1] 득점은 총 [170]점 입니다.</Typography>
          <Typography variant='h5'>총점 250점 중 170점 획득</Typography>
        </Paper>
    </Box>
  );
}