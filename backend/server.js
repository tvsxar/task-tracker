const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const taskRoutes = require('./routes/task.route');

require('dotenv').config();
console.log('Loaded CLIENT_URL:', process.env.CLIENT_URL);

const app = express();
const PORT = process.env.PORT || 3434;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});