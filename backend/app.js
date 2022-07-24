const express = require('express');
const cors = require('cors');
const initiateMyMongoServer = require("./config/database");

require('dotenv').config();

const app = express();


const PORT = 8080;

//db connection
initiateMyMongoServer();
app.use(cors());
app.use(express.json());

//Error handler

app.listen(PORT, ()=> console.log('listening on port ', PORT));