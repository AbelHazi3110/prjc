const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  mongoose.set('strictQuery', false);
  const uri = process.env.ATLAS_URI || 'mongodb://localhost:27017/landlord-app';
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
  connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
}

const landlordsRouter = require('./routes/landlords');
const reviewsRouter = require('./routes/reviews');

app.use('/landlords', landlordsRouter);
app.use('/reviews', reviewsRouter);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = app;
