import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const db = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI)
    console.log(`db connection on ${connectDB.connection.port}`)
  } catch (error) {
    console.log(error.message)
  }
}

export default db
