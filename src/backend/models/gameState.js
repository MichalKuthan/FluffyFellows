const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameStateSchema = new Schema({
  username: { type: String, required: true },
  petname: { type: String, required: true },
  pettype: String,
  state: {
    coins: Number,
    inventory: [String],
    happinessLevel: { type: Number, default: 0 }, 
    toiletLevel: { type: Number, default: 0 }, 
  }
}, { timestamps: true });

const GameState = mongoose.model('GameState', gameStateSchema);

module.exports = GameState;
