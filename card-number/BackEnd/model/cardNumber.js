const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
});

const card = mongoose.model("Card", cardSchema);

module.exports = card;
