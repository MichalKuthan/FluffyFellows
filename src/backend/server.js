const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes'); // Adjust the path as necessary

const app = express();
const PORT = process.env.PORT || 3000;
const dbURI = 'mongodb://127.0.0.1:27017/gameDB';

app.use(cors());
app.use(express.json());

// Use the gameRoutes for all game-related endpoints
app.use(gameRoutes);

mongoose.connect(dbURI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));
