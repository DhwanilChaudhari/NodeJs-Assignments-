const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://dhwanil899:ProjectOne@projectone.imrnl.mongodb.net/Rest"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", require("../router/productsRouter"));
app.use("/category", require("../router/categoryRouter"));
app.use("/users", require("../router/usersRouter"));
app.use("/carts", require("../router/cartRouter"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
