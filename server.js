const express = require("express");
const dotenv = require("dotenv");

//Routes
const users = require("./routes/users");
const bills = require("./routes/bills");
const payments = require("./routes/payments");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5500;

const app = express();

app.use("/api/v1/users", users);
app.use("/api/v1/bills", bills);
app.use("/api/v1/payments", payments);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
