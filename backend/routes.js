const GameState = require('./models/gameState.js'); // Adjust the path as necessary

// Route to save game state
app.post('/save', async (req, res) => {
  const gameState = new GameState(req.body);
  try {
    const savedState = await gameState.save();
    res.json(savedState);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to load game state
app.get('/load/:username', async (req, res) => {
  try {
    const state = await GameState.findOne({ username: req.params.username });
    if (!state) {
      return res.status(404).json({ message: 'GameState not found' });
    }
    res.json(state);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
