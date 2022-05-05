
const cryptojs=require('crypto-js');
const user=require('../models/usermodel')
const userinfo=require('../models/userinfomodel');


const userinfosave=(req,res)=>{

    var userid=req.params.user;
    var pas=req.body.passw;
    var ciphertext=cryptojs.AES.encrypt(pas,'secret key 123').toString();
    console.log(userid);
   
    user.findOne({phonenumber:userid},function(err,user){
        if(!err){
        let userinf=new userinfo({
            userin:userid,
            uemail:user.email,
            account:req.body.acc,
            username:req.body.uid,
            password:ciphertext
        })
        userinf.save();
        }
    });
    res.redirect(`/user/${userid}`);
   
   

};
module.exports=userinfosave;