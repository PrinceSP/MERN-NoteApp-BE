import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import noteRoute from './routes/noteRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5009

//middleware
app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(express.json()) //middleware to allow access the request.body contents

app.use("/api/notes", noteRoute )
app.use("/api/user", userRoute )

app.use("/", (_, res) => {
  res.status(200).send("Successfully connecting...")
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
  })
})

