const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameStateSchema = new Schema({
  username: { type: String, required: true },
  petname: { type: String, required: true },
  pettype: String,
  state: {
    coins: Number,
    inventory: [String],
    happinessLevel: { type: Number, default: 0 }, // Added happinessLevel field with a default value
    toiletLevel: { type: Number, default: 0 }, // Added toiletLevel field with a default value
  }
}, { timestamps: true });

const GameState = mongoose.model('GameState', gameStateSchema);

module.exports = GameState;
