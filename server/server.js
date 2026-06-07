// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // <-- Import DB connection
import contactRoutes from './routes/contactRoutes.js'; // <-- Import routes
import projectRoutes from './routes/projectRoutes.js'; // <-- Import routes
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json()); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/public', express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/contact', contactRoutes); // <-- Mount the contact routes
app.use('/api/projects', projectRoutes); // <-- Mount the project routes

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'EditVerse API is running smoothly 🚀' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});