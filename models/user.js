const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  online: {
    type: Boolean,
    defaulte: false,
  },
});

module.exports = mongoose.model("user", userSchema);
