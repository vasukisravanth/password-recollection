const mongoose=require("mongoose");
const userquestionSchema=new mongoose.Schema({
    phnumber:String,
    ques:String,
    answer:String
});

const userquestion=mongoose.model("userquestion",userquestionSchema);

module.exports=userquestion;