const express = require('express');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require("./routes/reportRoutes");
const initiateMyMongoServer = require("./config/database");

require('dotenv').config();
const app = express();
const PORT = 8088;

//db connection
initiateMyMongoServer();
app.use(cors());
app.use(express.json());
app.use('/uploads/photos', express.static(path.join(__dirname, 'uploads'))) //file

app.use('/user', userRoutes);
app.use("/report", reportRoutes);
//Error handler

app.listen(PORT, ()=> console.log('listening on port ', PORT));