const userinfo=require('../models/userinfomodel');
const cryptojs=require('crypto-js');

const edit_page=(req,res)=>{
    res.render('edit');
}
const edit_value=(req,res)=>{
var unum=req.params.number;
var accname=req.body.editedacc;
var edpass=req.body.editedpass;
var ciphertext=cryptojs.AES.encrypt(edpass,'secret key 123').toString();
// const update={
//     userin:unum,
//     account:accname
// }
// userinfo.findOneAndUpdate({userin:unum,account:accname},update,function(err,userupdate){
//     if(!err)
//     {
//         console.log(userupdate);
//     }
//     else{
//         console.log("error");
//     }
// })
//userinfo.findOneAndUpdate({$and:[{userin:unum},{account:accname}]},{password:ciphertext});
userinfo.find({account:accname},function(err,found){
    found.forEach(function(userdata){
        if(userdata.userin===unum)
        {
            console.log(edpass);
            userdata.password=edpass;
            
        }
        console.log(userdata);
    })
})
//userinfo.updateOne({$and:[{userin:unum},{account:accname}]},{$set:{password:ciphertext}});
console.log("upd?");
}

module.exports={
    edit_page,
    edit_value
}