const express = require('express');
const cors = require('cors');
const routes = require('./routes/auth.routes');
require('dotenv').config();
const connectDB = require('./db/db.js');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
connectDB();
app.use('/api', routes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



