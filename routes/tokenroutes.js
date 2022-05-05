const express=require('express');

const router=express.Router();

//const loginroutes=require('./loginroutes');
const tokencontroller=require('../controllers/tokencontroller');



router.get("/token/:number",tokencontroller.token_number)
//     var no=req.params.number;
//     currentuser.push(no);
//     console.log(currentuser);
//     res.render('token',{num:currentuser});
//    })

router.post('/token',tokencontroller.token_ver)
    
//     var id=req.body.id;
//     var token=req.body.token;
//     var unum=currentuser[0];
//     if(token==otp)
//     {
//         res.redirect(`user/${unum}`);
//         console.log(currentuser[0]);
//     }
//     else{
//         res.render('token');
//     }

// })



module.exports = router;