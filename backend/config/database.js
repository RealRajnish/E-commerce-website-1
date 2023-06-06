const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected successfully........");
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();
