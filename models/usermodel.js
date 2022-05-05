const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    phonenumber:String,
    email:String
});

const user=new mongoose.model("user",userSchema);

module.exports=user;