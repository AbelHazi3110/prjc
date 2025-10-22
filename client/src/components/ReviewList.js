import React from 'react';
import { List, ListItem, ListItemText, Typography, Rating } from '@mui/material';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <Typography variant="h3" component="h3" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <ListItemText
              primary={<Rating value={review.rating} readOnly />}
              secondary={review.comment}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReviewList;
