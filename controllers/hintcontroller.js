const usersearchcontroller = require('./usersearchcontroller');
var nodemailer = require('nodemailer');
const cryptojs = require('crypto-js');

//const acc=usersearchcontroller.val;


let searchDetails = [];

const userinfo = require('../models/userinfomodel');
const userquest = require('../models/userquestionmodel');
// const dispques=(req,res)=>{
//     var num=req.params.number;
//     userquest.find({phnumber:num},function(err,data){
//         res.render('hint',{hintques:data[0].ques,numb:num});
//     })


// }

const verify = (req, res) => {
    var ph = req.params.numb;
    var acc = req.params.search;
    var inans = req.body.answer;
    console.log(ph);
    console.log(inans);
    console.log(acc);
    //console.log(Use);

    //var val=usersearchcontroller.val;
    //console.log(val);
    userquest.find({ phnumber: ph }, function (err, data) {
        console.log(data[0].ques);
        console.log(data[0].answer);
        if (inans == data[0].answer) {


            userinfo.find({ account: acc }, function (err, found) {
                if (!err) {
                    console.log(found);
                    found.forEach(function (userdata) {
                        if (userdata.userin === ph) {
                            searchDetails.push(userdata);

                            var passwo = cryptojs.AES.decrypt(userdata.password, 'secret key 123');
                            var originapass = passwo.toString(cryptojs.enc.Utf8);
                            //var passwo=userdata.password

                            console.log(userdata.uemail);

                            var transport = nodemailer.createTransport(
                                {
                                    service: 'gmail',
                                    auth: {
                                        user: 'lockyourkeycollection@gmail.com',
                                        pass: 'lrgzekstxjybqhsm'
                                    }
                                }
                            );

                            var mailOptions = {
                                from: 'lockyourkeycollection@gmail.com',
                                to: userdata.uemail,
                                subject: 'CREDENTIAL',
                                text: `Hello ${originapass}. Thank you`

                            };
                            transport.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error)
                                } else {
                                    console.log('email sent' + info.response);
                                }
                            });


                        }
                    })
                    var li = `/user/${ph}`;
                    res.redirect(li);
                }
                console.log(searchDetails);

            });
        }
    })
}
module.exports = {

    verify
}

