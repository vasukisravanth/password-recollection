const express=require('express');

const router=express.Router();

const usersearchcontroller=require('../controllers/usersearchcontroller');

router.post('/usersearch/:user',usersearchcontroller);

module.exports=router;