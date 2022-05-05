const mongoose=require("mongoose");

const userinfoSchema=new mongoose.Schema({
    userin:String,
    uemail:String,
    account:String,
    username:String,
    password:String
});

const userinfo=mongoose.model("userinfo",userinfoSchema);

module.exports=userinfo;