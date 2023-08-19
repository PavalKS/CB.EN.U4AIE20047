import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function TrainDetails() {
  // Fetch and display train details
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ marginTop: 4 }}>
        Train Details
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        {/* Display train details */}
      </Paper>
    </Container>
  );
}

export default TrainDetails;
