const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );

    mongoose.connect(DB).then(() => console.log("DB connection successful!"));
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
