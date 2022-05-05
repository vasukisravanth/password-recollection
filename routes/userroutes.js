const express=require('express');

const router=express.Router();

const usercontroller=require('../controllers/usercontroller');



router.get('/user/:unum',usercontroller);



module.exports = router;
