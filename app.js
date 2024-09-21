const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./connection");
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser");
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

//mongoDB connection
connectDB();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(cookieParser());


//Set Ejs Template engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.use('/',routes);


app.listen(2000, console.log("Server Started at Port: ",PORT)); 