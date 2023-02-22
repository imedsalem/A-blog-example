const mongoose = require('mongoose')
require("dotenv").config();

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.DATA_BASE);
        console.log("connected to dataBase")
      } catch (error) {
        console.log(error);
      }
}

module.exports = connectDB