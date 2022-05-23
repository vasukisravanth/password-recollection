const userinfo=require('../models/userinfomodel');
const userroutecontroller=require('./usercontroller');
const flag=userroutecontroller.flag;
const logout=(req,res)=>{
    // req.session.destroy((err)=>{
    //     if(err) throw err;
    //     res.redirect("/");
    // })
    
    res.redirect("/");
}
module.exports={
    logout
}