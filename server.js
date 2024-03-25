const express = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
//const cors = require('cors');


dotenv.config();

// mongodb connection

connectDB();

// rest object 

const app = express()
//app.use(cors())

// middleware
app.use(express.json());
app.use(moragan('dev'));


// routes 

app.use('/api/v1/user' , require("./routes/userRoutes"));
app.use("/api/v1/admin" , require("./routes/adminRoutes.js"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes.js"));

// port 
const port = process.env.PORT || 8080
 
// listen Port ;

app.listen(port , ()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on Port ${process.env.PORT}`.bgCyan.white)
})

