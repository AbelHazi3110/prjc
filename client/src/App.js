import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandlordDetailsPage from './pages/LandlordDetailsPage';
import AddReviewPage from './pages/AddReviewPage';
import { CssBaseline, Container, Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Typography variant="h1" component="h1" gutterBottom>
          Rate Your Landlord
        </Typography>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landlords/:id" element={<LandlordDetailsPage />} />
          <Route path="/landlords/:id/add-review" element={<AddReviewPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
