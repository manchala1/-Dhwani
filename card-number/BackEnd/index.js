const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const CardRoutes = require("./routes/cardroute");
const app = express();
const db = "mongodb://localhost:27017/cardnumber";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });
app.use(cors());
require("./model/cardNumber");
app.use(express.json());
app.use("/card", CardRoutes);
app.listen(port, () => {
  console.log(`Server is running on Port :: ${port}`);
});
