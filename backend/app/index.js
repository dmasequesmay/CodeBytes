const express = require('express');
// const firebase = require('./firebaseConfig');
const elasticSearch = require('./elasticSearchConfig');
// const { createLeaderboard } = require('./keepTheScoreConfig');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
