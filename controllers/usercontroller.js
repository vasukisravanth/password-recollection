
const userinfo=require('../models/userinfomodel');
const tokenroutecontroller=require('./tokencontroller');

//const isAuth=tokenroutecontroller.isAuth;
const user_info=(req,res,isAuth)=>{
    var unum=req.params.unum;
    userinfo.find({userin:unum},function(err,userdata){
        res.render('user',{user:unum,previousBookings:userdata});
    });
    
};


module.exports=user_info;