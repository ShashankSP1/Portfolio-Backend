// index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const userRoutes = require('./router/userRoutes');
const emailRoutes = require('./router/emailRoutes');

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://shashanksp-portfolio.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', emailRoutes);

app.post("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!"});
});

const PORT = process.env.PORT || 8080;

sequelize.sync() // Creates the table if it doesn't exist
  .then(() => {
    console.log("Database & tables created!");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.error("Error syncing database:", err));
