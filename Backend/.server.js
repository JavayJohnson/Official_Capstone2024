require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const notesRoutes = require('./routes/notesRoutes');
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
