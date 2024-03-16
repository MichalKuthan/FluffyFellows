const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameStateSchema = new Schema({
  username: { type: String, required: true },
  petname: { type: String, required: true },
  state: {
    coins: Number,
    inventory: [String]
  }
}, { timestamps: true });

const GameState = mongoose.model('GameState', gameStateSchema);

module.exports = GameState;
