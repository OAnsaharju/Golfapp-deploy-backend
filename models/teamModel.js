const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  playerone: {
    name: {
      required: true,
      type: String,
    },
  },
  playertwo: {
    name: {
      required: true,
      type: String,
    },
  },
  playerthree: {
    name: {
      required: true,
      type: String,
    },
  },
  playerfour: {
    name: {
      required: true,
      type: String,
    },
  },
});

module.exports = mongoose.model("teamData", teamSchema);
