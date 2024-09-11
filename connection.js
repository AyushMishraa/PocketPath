const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_HOST);
        console.log("MongoDB Atlas connected Successfully")
    }
    catch(err){
       console.log("MongoDB Connection Error: ", err );
    }
}
module.exports = connectDB;