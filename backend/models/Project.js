const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  data: Object,
});

module.exports = mongoose.model("Project", ProjectSchema);
