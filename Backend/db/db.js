import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const dbConnect = async () => {
  try {
  await mongoose.connect(process.env.DB_URL)
    console.log("db connected")
  } catch (error) {
    console.log("error arha h",error)
    process.exit(1)
  }
}
