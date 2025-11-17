import app from "./src/app.js"

const PORT = process.env.PORT || 5000; // Read the PORT from environment (if set) or default to 5000

app.listen(PORT, ()  => {
    console.log(`Resume Builder API running on http://localhoast:${PORT}`) // Lets us know ther server is up and the PORT
})