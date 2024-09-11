require('dotenv').config();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config(); 

const mongoURI  = process.env.DB_HOST;
console.log("mongoURI", mongoURI);

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("MongoDB Atlas connected Successfully")
    }
    catch(err){
       console.log("MongoDB Connection Error: ", err );
       process.exit(1);
    }
}
module.exports = connectDB;