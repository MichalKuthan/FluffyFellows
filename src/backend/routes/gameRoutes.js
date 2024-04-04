const express = require('express');
const router = express.Router();
const GameState = require('../models/gameState'); // Adjust the path as necessary

// Home route - simple API check
router.get('/', (req, res) => {
  res.send('Game API is running...');
});

// Save game state
router.post('/save', async (req, res) => {
  const { username, petname, pettype, state } = req.body;
  try {
    let gameState = await GameState.findOne({ username, petname });
    if (gameState) {
      gameState.pettype = pettype;
      gameState.state = state;
      await gameState.save();
    } else {
      gameState = new GameState({ username, petname, pettype, state });
      await gameState.save();
    }
    res.json(gameState);
  } catch (err) {
    res.status(500).send({ message: 'Error saving game state', error: err });
  }
});

// Load game state by ID
router.get('/load/:gameId', async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const gameState = await GameState.findById(gameId);
    if (!gameState) {
      return res.status(404).send('Game state not found');
    }
    res.send(gameState);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Fetch all saved games
router.get('/games', async (req, res) => {
  try {
    const allGames = await GameState.find();
    res.send(allGames);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error while fetching games');
  }
});

module.exports = router;