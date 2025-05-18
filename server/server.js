// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/db.js'

// //INITIALIZE EXPRESS
// const app= express()

// //CONNECT TO DATABASE
// await connectDB()

// //MIDDLEWARE
// app.use(cors())
// app.use(express.json())

// //ROUTES
// app.get('/',(req,res) => res.send("API WORKING"))

// //PORT 
// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })



import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node" ;
import {clerkWebhooks} from './controllers/webhooks.js'

// INITIALIZE EXPRESS
const app = express()

// DEFINE START SERVER FUNCTION
const startServer = async () => {
  try {
    await connectDB()

    // MIDDLEWARE
    app.use(cors())
    app.use(express.json())

    // ROUTES
    app.get('/', (req, res) => res.send("API WORKING"))
    app.get("/debug-sentry", function mainHandler(req,res){
        throw new Error ("My First Sentry Error !");
    });
    app.post('/webhooks', clerkWebhooks)

    // PORT
    const PORT = process.env.PORT || 5000
    Sentry.setupExpressErrorHandler(app);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

  } catch (error) {
    console.error("Connection failed:", error)
  }
}

// CALL START FUNCTION
startServer()
