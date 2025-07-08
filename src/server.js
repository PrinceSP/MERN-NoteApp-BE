import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import notesRouter from './routes/noteRoute.js'
import userRouter from "./routes/userRoute.js"
import rateLimiter from '../middleware/rateLimiter.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5009

//middleware
app.use(express.json()) //middleware to allow access the request.body contents
app.use(rateLimiter) //middleware to control request rate limit
app.use(cors())

app.use("/api/notes", notesRouter)
app.use("/api/user", userRouter)

app.use("/",(req,res)=>{
  res.status(200).send("Successfully connecting...")
})

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
  })
})

