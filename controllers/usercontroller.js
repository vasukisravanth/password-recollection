
const userinfo=require('../models/userinfomodel');
const tokenroutecontroller=require('./tokencontroller');
//var isauth=tokenroutecontroller.isAuth;
let flag=tokenroutecontroller.flag


//const isAuth=tokenroutecontroller.isAuth;
const user_info=(req,res,isauth)=>{
    var unum=req.params.unum;
    
        userinfo.find({userin:unum},function(err,userdata){
            res.render('user',{user:unum,previousBookings:userdata});
        });
    
    
       // res.render('login');
    
   
    
    
};


module.exports=user_info;
module.exports.flag=flag;