
const fast2sms=require('fast-two-sms');

const user=require('../models/usermodel')


function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}

let otp=generateRandomNumber();

const login_otp=(req,res)=>{
    var number=req.body.number;

   
    var options={
        authorization:"nw7AVTbWYCyKsLBgI6fh0murO4l3iavdtXez8Jcqx1N5R2ZFjEL2KJWHjcRIwtZGiMlF9U0kNvsB6xfm",
        message:otp,
        numbers:[number]
    }
    fast2sms.sendMessage(options)
     .then((response)=>{
        console.log(response);
       
      
      })
     .catch((error)=>{
     console.log(error);
     });
     const newuser=new user({
            phonenumber:number,
            email:req.body.mail
        });
        user.exists({phonenumber:number},function(err,doc){
            if(!err)
            {
                if(!doc){
                    
                    newuser.save(function(err)
                    {
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log('user added');
                        }
                    });
                   
                //     var li=`/question/${number}`;
                //     res.redirect(li);
                 }
                else{
                    var link=`/token/${number}`
                    res.redirect(link);
                }
            }
        });
}
module.exports=login_otp;
module.exports.otp=otp;