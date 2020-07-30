const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/error');
const { protect, authorize } = require('./middleware/auth');

//Routes
const users = require('./routes/users');
const bills = require('./routes/bills');
const payments = require('./routes/payments');
const auth = require('./routes/auth');
const notices = require('./routes/notice');

// Configure env vars
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5500;

const app = express();

//Body parser
app.use(express.json());

//Connect db
connectDb();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, OPTIONS, DELETE'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }
  next();
});
app.use('/api/v1/users', protect, authorize('admin'), users);
app.use('/api/v1/bills', protect, bills);
app.use('/api/v1/payments', protect, payments);
app.use('/api/v1/notices', protect, notices);
app.use('/api/v1/auth', auth);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
