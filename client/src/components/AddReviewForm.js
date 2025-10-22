import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Rating, Typography } from '@mui/material';

const AddReviewForm = ({ landlordId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/reviews', {
        landlord: landlordId,
        rating,
        comment,
      })
      .then((res) => {
        window.location = `/landlords/${landlordId}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Typography variant="h3" component="h3" gutterBottom>
        Add a Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </div>
        <div>
          <TextField
            label="Comment"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddReviewForm;
