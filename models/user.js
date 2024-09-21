const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema  = new mongoose.Schema({
    userName:{
        type : String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

 
// middle-ware for hashing the password
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }
    const salt =  await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

// for comparing the enteredPassword from user with stored password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const user = mongoose.model("user",userSchema);
module.exports = user;