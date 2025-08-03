const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const cors = require('cors');
const uploadRoute = require('./routes/uploadRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', uploadRoute);


connectDB(); // Connect to MongoDB

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));