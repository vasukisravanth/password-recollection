const loginroutecontroller=require('./logincontroller');

const question=require('../models/questionmodel');
const userquest=require('../models/userquestionmodel')
let currentuser=[];
let cuser=[];
function generateRandomNumber() {
    var minm = 1;
    var maxm = 8;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

let qno=generateRandomNumber();


const questdisplay=(req,res)=>{

    var un=req.params.number;
    cuser.push(un);
    console.log(qno);
    question.find({number:qno},function(err,data){
        console.log(data);
        console.log(data[0].quest);
        currentuser.push(data[0].quest);
        console.log(currentuser[0]);
        res.render('question',{question:data[0].quest});
    });
}

const answsubmit=(req,res)=>{
    var answ=req.body.answer;
    var num=cuser[0];
    console.log(num);
    const newuser=new userquest({
        phnumber:num,
        ques:currentuser[0],
        answer:answ

    });

    newuser.save(function(err)
    {
        if(err){
            console.log(err);
        }
        else{
            console.log('user question added');
            var li=`/token/${num}`;
            res.redirect(li);
        }
    });
    

}

module.exports={
    questdisplay,
    answsubmit

}