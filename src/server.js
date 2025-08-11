import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
<<<<<<< HEAD
=======
import path from 'path'
>>>>>>> 06aafa3a90a0eef1a85b523dcb15a6258924a8ac
import connectDB from "./config/db.js"
import noteRoute from './routes/noteRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config()

const app = express()
<<<<<<< HEAD
const PORT = process.env.PORT || 5000  // Changed from 5009 to 5000
const HOST = '0.0.0.0'  // Added host binding
=======
const PORT = process.env.PORT || 5009
const __dirname = path.resolve()
>>>>>>> 06aafa3a90a0eef1a85b523dcb15a6258924a8ac

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(cors({
<<<<<<< HEAD
    origin: ["http://localhost:5173", "http://3.107.189.77"]  // Added your public IP
  }))
} else {
  // In production, allow your domain
  app.use(cors({
    origin: ["http://3.107.189.77", "https://3.107.189.77", "http://localhost:5173"]  // Add your domain here
  }))
}

app.use(express.json())
=======
    origin: "http://localhost:5173"
  }))
}
app.use(express.json()) //middleware to allow access the request.body contents
>>>>>>> 06aafa3a90a0eef1a85b523dcb15a6258924a8ac

app.use("/api/notes", noteRoute)
app.use("/api/user", userRoute)

<<<<<<< HEAD
app.use("/", (_, res) => {
  res.status(200).send(`Listening on http://${HOST}:${PORT}`)
})

connectDB().then(() => {
  app.listen(PORT, HOST, () => {  // Added HOST parameter
    console.log(`Listening on http://${HOST}:${PORT}`)
  })
})
=======
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../noteapp-fe/dist")))

  app.get(/(.*)/, (_, res) => {
    res.sendFile(path.join(__dirname, "../noteapp-fe","dist", "index.html"))
  })
}

app.use("/", (_, res) => {
  res.status(200).send("Successfully connecting...")
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
  })
})
>>>>>>> 06aafa3a90a0eef1a85b523dcb15a6258924a8ac
