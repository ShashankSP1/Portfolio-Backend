// index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const userRoutes = require('./router/userRoutes');
const emailRoutes = require('./router/emailRoutes');

const app = express();
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST"],        
  credentials: true                
}));

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', emailRoutes);

app.post("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!"});
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

sequelize.sync() // Creates the table if it doesn't exist
  .then(() => {
    console.log("Database & tables created!");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("Error syncing database:", err));
