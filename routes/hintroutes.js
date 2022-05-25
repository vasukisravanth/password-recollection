const express=require('express');

const router=express.Router();

const hintcontroller=require('../controllers/hintcontroller');
//router.get("/hint/:number",hintcontroller.dispques);
router.post('/answer/:numb/:search',hintcontroller.verify);
module.exports = router;