const mongoose = require('mongoose');

const connectDb = async () => {
  const con = await mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  console.log(`Connected to MongoDb ${con.connection.host}`);
};

module.exports = connectDb;
