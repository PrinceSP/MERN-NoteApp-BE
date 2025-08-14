import mongoose from "mongoose"

export default async function connectDB {
  try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    process.exit(1)
  }
}