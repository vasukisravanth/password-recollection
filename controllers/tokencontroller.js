
const loginroutecontroller=require('./logincontroller');
const otp=loginroutecontroller.otp;

//const isAuth=loginroutecontroller.isAuth;

// const isAuth=(req,res,next)=>{
//     if(req.session.isAuth){
//         next()
//     }else{
//         res.redirect("/login");
//     }
// }
let currentuser=[];
const token_number=(req,res)=>{
    var no=req.params.number;
    currentuser.push(no);
    console.log(currentuser);
    res.render('token',{num:currentuser});
   
}

const token_ver=(req,res)=>{
    var id=req.body.id;
    var token=req.body.token;
    var unum=currentuser[0];
    if(token==otp)
    {
        //req.session.isAuth=true;
        
        res.redirect(`user/${unum}`);
        console.log(currentuser[0]);
    }
    else{
        res.render('token');
    }
   
  
}

module.exports={
    token_number,
    token_ver,
    
    
}
