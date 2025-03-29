const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { userId, name, description, data } = req.body;
  try {
    const project = new Project({ userId, name, description, data });
    await project.save();
    res.status(201).json({ message: "Project saved successfully", project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.params.userId });
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
