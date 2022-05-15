const userinfo=require('../models/userinfomodel');
const cryptojs=require('crypto-js');

const edit_page=(req,res)=>{
    var unum=req.params.user;
console.log(unum);
    res.render('edit',{usern:unum});
}
const edit_value=(req,res)=>{
var unum=req.params.usern;
console.log(unum);
var accname=req.body.editedacc;
var edpass=req.body.editedpass;
var ciphertext=cryptojs.AES.encrypt(edpass,'secret key 123').toString();


userinfo.findOne({userin:unum,account:accname},function(err,result){
    userinfo.findOneAndUpdate({_id:result._id},{password:ciphertext},function(err,result2){
        console.log(result2);
    })
    console.log(result);
})
console.log("upd?");
}

module.exports={
    edit_page,
    edit_value
}