const userinfo=require('../models/userinfomodel');

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