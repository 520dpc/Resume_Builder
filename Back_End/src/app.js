import express from "express"; // Imports the Express framwork we use to build HTTP API
import cors from "cors"; // This is the middleware allowing the front end to make calls to the back end
import resumeRoutes from "./routes/resumeRoutes.js"; // Imports the resume related routes

const app = express(); // Creates an express application instance

app.use(cors()); // Enable Cors for all routes - import for local dev React -> API Calls
app.use(express.json()); // Parses incoming JSON bodies so req.body is auto populated

app.use('/generate', resumeRoutes) //Mount resumeRoutes under /generate (so POST /generate hits our router)

app.get("/", (req, res) => { //Simple GET route at root URL for a health/status check
    res.send("Resume Builder API is running") //Respond with a plain message – useful to confirm server is alive
})

export default app; // Export the app so server.js can import and start it