const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./connection");
const methodOverride = require('method-override');
require('dotenv').config();

const PORT = 2000;
const app = express();

//mongoDB connection
connectDB();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));


//Set Ejs Template engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.use('/',routes);


app.listen(2000, console.log("Server Started at Port: ",PORT)); 