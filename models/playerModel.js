const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerinfo: {
    name: {
      required: true,
      type: String,
    },
    hcp: {
      required: true,
      type: Number,
    },
    club: {
      required: true,
      type: String,
    },
  },

  stats: {
    wins: {
      type: Number,
    },
    attendance: {
      type: Number,
    },
    worstplacement: {
      type: Number,
    },
    bestscore: {
      type: Number,
    },
    worstscore: {
      type: Number,
    },
  },
});

module.exports = mongoose.model("Data", playerSchema);
