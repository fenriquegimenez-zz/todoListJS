const mongoose = require("mongoose")
require("dotenv").config({ path: ".env" })

const connectDB = async () => {
  const { MONGO_USER, MONGO_PASS } = process.env
  const mongoUri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.1gz9v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  try {
    mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("[DB] Database connected succesfully")
  } catch (error) {
    console.error("[DB] There was an error, database not connected")
    console.error(error)
  }
}

module.exports = connectDB
