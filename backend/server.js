const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongo db connection established");
});

const userRoute = require('./routes/user');
const taskRoute = require('./routes/task');

app.use('/user', userRoute);
app.use('/task', taskRoute); 

app.listen(port, ()=>{
    console.log(`server is running on port:  ${port}`);
});