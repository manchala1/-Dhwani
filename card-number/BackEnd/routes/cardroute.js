const express = require("express");
const CardNumber = require("../model/cardNumber");
const mongoose = require("mongoose");
const router = express.Router();
router.post("/", async function (req, res) {
  const { cardNumber } = req.body;
  const Card = await CardNumber.create({
    cardNumber: cardNumber,
  });
  res.json({
    status: "success",
    data: {
      Card,
    },
  });
});

router.get("/list", async function (req, res) {
  const Cards = await CardNumber.find({});
  res.json({
    status: "success",
    data: {
      Cards,
    },
  });
});

router.delete("/delete/:id", async function (req, res) {
  const card = await CardNumber.findOneAndDelete({ _id: req.params.id });
  res.json({
    status: "success",
    data: card,
  });
});

module.exports = router;
