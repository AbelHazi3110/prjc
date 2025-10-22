import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import ReviewList from '../components/ReviewList';
import { Card, CardContent, Typography, Button } from '@mui/material';

const LandlordDetailsPage = () => {
  const [landlord, setLandlord] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/landlords/${id}`)
      .then((res) => {
        setLandlord(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!landlord) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h2" component="h2">
            {landlord.name}
          </Typography>
          <Typography variant="body1">{landlord.address}</Typography>
        </CardContent>
      </Card>
      <ReviewList reviews={landlord.reviews} />
      <Button
        component={Link}
        to={`/landlords/${landlord._id}/add-review`}
        variant="contained"
        color="primary"
      >
        Add a Review
      </Button>
    </div>
  );
};

export default LandlordDetailsPage;
