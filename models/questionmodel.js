const mongoose=require("mongoose");
const questionSchema=new mongoose.Schema({
    number:String,
    quest:String,
});

const question=mongoose.model("question",questionSchema);

module.exports=question;