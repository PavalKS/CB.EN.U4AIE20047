import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function TrainsList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data using axios
    axios.get('API_URL_HERE', { headers: { Authorization: 'Bearer YOUR_TOKEN_HERE' } })
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ marginTop: 4 }}>
        Trains Schedule
      </Typography>
      <List sx={{ marginTop: 3 }}>
        {trains.map(train => (
          <ListItem key={train.trainNumber}>
            <ListItemText primary={train.trainName} />
            {/* Display other train details */}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TrainsList;
