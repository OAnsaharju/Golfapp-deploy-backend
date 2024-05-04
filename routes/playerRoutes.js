const express = require("express");
const router = express.Router();
const Model = require("../models/playerModel.js");
const teamModel = require("../models/teamModel.js");

// routes

// get all players
router.get("/players/", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ mssg: "Error" });
  }
});

// get a single player
router.get("/players/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ mssg: "No such player" });
  }
});

// delete a player
router.delete("/players/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).json({ mssg: `Player was deleted, ${data.name}` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// update a player
router.patch("/players/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
});

// post a player
router.post("/players/", async (req, res) => {
  const { playerinfo, stats } = req.body;

  try {
    const player = await Model.create({ playerinfo, stats });
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// get all teams

router.get("/teams/", async (req, res) => {
  try {
    const data = await teamModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post a team

router.post("/teams/", async (req, res) => {
  const { playerone, playertwo, playerthree, playerfour } = req.body;

  try {
    const team = await teamModel.create({
      playerone,
      playertwo,
      playerthree,
      playerfour,
    });
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
});

module.exports = router;
