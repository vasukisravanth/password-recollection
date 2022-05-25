
const userquest=require('../models/userquestionmodel');
//const userquest=require('../models/userquestionmodel');
let userse=[];
var use;

//export let use;

const user_search=(req,res)=>{
     var val=req.body.search;
    userse.push(val);
    use=val;
    var userid=req.params.user;
    console.log(val);
    console.log(userse[0]);
    userquest.find({phnumber:userid},function(err,data){
                res.render('hint',{hintques:data[0].ques,numb:userid,search:val});
            })
    //res.render('hint',{numb:userid,search:val});

    // var li=`/hint/${userid}`
    // res.redirect(li);
    //let searchDetails=[];
    
    // userinfo.find({account:val},function(err,found){
    //     if(!err)
    //     {
    //         found.forEach(function(userdata){
    //             if(userdata.userin===userid){
    //                 searchDetails.push(userdata);

    //                 var passwo=cryptojs.AES.decrypt(userdata.password,'secret key 123');
    //                 var originapass=passwo.toString(cryptojs.enc.Utf8);
    //                 //var passwo=userdata.password
                    
    //                 console.log(userdata.uemail);

    //                 var transport=nodemailer.createTransport(
    //                     {
    //                         service: 'gmail',
    //                            auth: {
    //                             user: 'sravanthvasuki@gmail.com',
    //                              pass: 'Sravan#2611'
    //                            }
    //                     }
    //                 );
                    
    //                 var mailOptions={
    //                     from:'sravanthvasuki@gmail.com',
    //                     to:userdata.uemail,
    //                     subject:'CREDENTIAL',
    //                     text:`Hello ${originapass}. Thank you`
                    
    //                 };
    //                 transport.sendMail(mailOptions,function(error,info){
    //                     if(error){
    //                         console.log(error)
    //                     } else{
    //                         console.log('email sent'+info.response);
    //                     }
    //                 });


    //             }
    //         })
    //         var li=`/user/${userid}`;
    //         res.redirect(li);
    //     }
    //     console.log(searchDetails);
       
    // });
    

}


module.exports=user_search;

//export default { Use: use } 
//module.exports.use=use;
