const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/error');

//Routes
const users = require('./routes/users');
const bills = require('./routes/bills');
const payments = require('./routes/payments');

// Configure env vars
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5500;

const app = express();

//Body parser
app.use(express.json());

//Connect db
connectDb();

app.use('/api/v1/users', users);
app.use('/api/v1/bills', bills);
app.use('/api/v1/payments', payments);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
