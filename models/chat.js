const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chat: {
      type: String,
    },
    user: {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("chat", chatSchema);
