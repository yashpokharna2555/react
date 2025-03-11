const express = require('express');
const cors = require('cors');
const routes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const connectDB = require('./db/db.js');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
connectDB();
app.use('/api', routes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



