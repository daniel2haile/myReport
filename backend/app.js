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
// app.use(cors({origin: "*" }));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')) //file

app.use('/user', userRoutes);
app.use("/report", reportRoutes);

// Error
// app.use((req, res, next) => {
//   // Error goes via `next()` method
//   setImmediate(() => {
//     next(new Error('Something went wrong'))
//   })
// })
// app.use( (err, req, res, next) =>{
//   console.error(err.message)
//   if (!err.statusCode) err.statusCode = 500
//   res.status(err.statusCode).send(err.message)
// })

app.listen(PORT, ()=> console.log('listening on port ', PORT));