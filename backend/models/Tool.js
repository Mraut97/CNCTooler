
const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  tool_name: String,
  holder_type: String,
  machine_type: String,
  tool_diameter: Number,
  tool_length: Number,
  tool_life_max: Number,
  tool_life_used: Number,
  spindle_speed: Number,
  feed_rate: Number,
  insert_type: String,
  last_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tool', toolSchema);
