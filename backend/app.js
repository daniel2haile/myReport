const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const initiateMyMongoServer = require("./config/database");

require('dotenv').config();

const app = express();


const PORT = 8080;

//db connection
initiateMyMongoServer();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
//Error handler

app.listen(PORT, ()=> console.log('listening on port ', PORT));