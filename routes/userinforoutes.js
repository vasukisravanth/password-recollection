const express=require('express');

const router=express.Router();

const userinfocontroller=require('../controllers/userinfocontroller');


router.post('/userinfo/:user',userinfocontroller);
    

   module.exports = router;
