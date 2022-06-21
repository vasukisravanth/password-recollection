const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb+srv://vas:sravan@cluster0.n7bw0.mongodb.net/pass", { useNewUrlParser: true });
const userroutes = require('./routes/userroutes');
const loginroutes = require('./routes/loginroutes');
const tokenroutes = require('./routes/tokenroutes');
const userinforoutes = require('./routes/userinforoutes');
const usersearchroutes = require('./routes/usersearchroutes');
const editroutes = require('./routes/editroutes');
const logoutroutes = require('./routes/logoutroutes');
const questionroutes = require('./routes/questionroutes');
const hintroutes = require('./routes/hintroutes');
const res = require('express/lib/response');




const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(session({
//     secret:secret,
//     resave:false,
//     saveUninitialized:false

// }));

app.get('/', function (req, res) {
    res.render('login');
});



app.use(userroutes);
app.use(loginroutes);
app.use(tokenroutes);
app.use(userinforoutes);
app.use(usersearchroutes);
app.use(editroutes);
app.use(logoutroutes);
app.use(questionroutes);
app.use(hintroutes);

// function myFunction(){
// res.render('edit');
// }


app.listen(3000, () => {
    console.log('server started');
})




//


// 