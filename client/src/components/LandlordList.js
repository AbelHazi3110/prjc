import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const LandlordList = () => {
  const [landlords, setLandlords] = useState([]);

  useEffect(() => {
    axios
      .get('/landlords')
      .then((res) => {
        setLandlords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        Landlords
      </Typography>
      <List>
        {landlords.map((landlord) => (
          <ListItem
            key={landlord._id}
            component={Link}
            to={`/landlords/${landlord._id}`}
          >
            <ListItemText primary={landlord.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LandlordList;
