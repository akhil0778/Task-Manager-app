require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/task.route');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
