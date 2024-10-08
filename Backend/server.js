const connectToDb=require('./config/connectToDb')
connectToDb()
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

console.log(process.env.DB_URL)

app.listen(PORT,()=>{console.log('Connected to Server')}) 
