
const userinfo=require('../models/userinfomodel');


const user_info=(req,res)=>{
    var unum=req.params.unum;
    userinfo.find({userin:unum},function(err,userdata){
        res.render('user',{user:unum,previousBookings:userdata});
    });
    
};


module.exports=user_info;