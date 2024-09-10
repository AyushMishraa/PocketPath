const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://cloudDBayush:PIaeqeBWk6ooYy3X@databaseayush.vnaad.mongodb.net/PocketPath")
        console.log("MongoDB Atlas connected Successfully")
    }
    catch(err){
       console.log("MongoDB Connection Error: ", err );
    }
}
module.exports = connectDB;