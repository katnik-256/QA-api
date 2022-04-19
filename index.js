
const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.get('/',(req,res) =>{
    res.send('<h1>the server is working</h1>');
});
const mongoAtlasUri =
"mongodb+srv://katnik256:quadratic96@project2.qwsm2.mongodb.net/project2?retryWrites=true&w=majority";
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
    console.log("could not connect");
  }

 
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server started on port ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import  itemsRoutes from './routes/items.js';
// const app = express();

// dotenv.config();
// //Body parser Middleware
// app.use(express.json());

// //process.env.process
// let mongoString = process.env.MONGOD_MLAB;

// //mongoose connect
// mongoose
// .connect(mongoString,{ useUnifiedTopology: true , useNewUrlParser: true})
// .then(()=> console.log('👌 Connected to Mongodb.....project2..'))
// .catch(err => console.log('🚨 failed Server to connect..'+(err)));
 
// //Use Routes
// app.use('/',itemsRoutes);

// const port = process.env.PORT || 5000;
// app.listen(port,()=>
//  console.log(`Server started at port ${port}`))

