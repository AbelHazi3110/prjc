import React from 'react';
import { useParams } from 'react-router-dom';
import AddReviewForm from '../components/AddReviewForm';

const AddReviewPage = () => {
  const { id } = useParams();

  return (
    <div>
      <AddReviewForm landlordId={id} />
    </div>
  );
};

export default AddReviewPage;
