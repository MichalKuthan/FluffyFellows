const express = require('express');
const mongoose = require('mongoose');
const GameState = require('./models/gameState'); 
const app = express();
const cors = require ('cors');

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

const PORT = process.env.PORT || 3000;

// MongoDB URI - adjust with your actual MongoDB URI
const dbURI = 'mongodb://127.0.0.1:27017/gameDB';

mongoose.connect(dbURI)
  .then((result) => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));

// Home route - simple API check
app.get('/', (req, res) => {
  res.send('Game API is running...');
});

// Save game state
app.post('/save', (req, res) => {
  const gameState = new GameState(req.body);
  gameState.save()
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err));
});

// Load game state by username
app.get('/load/:username', (req, res) => {
  GameState.findOne({ username: req.params.username })
    .then(result => {
      if (!result) {
        return res.status(404).send('Game state not found');
      }
      res.send(result);
    })
    .catch(err => res.status(500).send(err));
});

// Add more routes as needed
