
const fast2sms=require('fast-two-sms');
const nodemailer=require('nodemailer');

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
    var mail=req.body.mail

   
    // 
    // var transport=nodemailer.createTransport(
    //     {
    //         service: 'gmail',
    //            auth: {
    //             user: 'sravanthvasuki@gmail.com',
    //              pass: 'Sravan#2611'
    //            }
    //     }
    // );
    
    // var mailOptions={
    //     from:'sravanthvasuki@gmail.com',
    //     to:mail,
    //     subject:'CREDENTIAL',
    //     text:`Greetings,your OTP for password-recollections is ${otp}. Thank you`
    
    // };
    // transport.sendMail(mailOptions,function(error,info){
    //     if(error){
    //         console.log(error)
    //     } else{
    //         console.log('email sent'+info.response);
    //     }
    // });
    var options={
            authorization:"a48Wfi4PvItXdEUWOKCorBwrriVlupj7w5OhAxAMXpO3JZUsFKXsDFQ4qjQ3",
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
         console.log('vas');
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