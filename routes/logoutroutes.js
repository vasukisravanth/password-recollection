const express=require('express');

const router=express.Router();
const logoutcontroller=require('../controllers/logoutcontroller');
router.post('/logout',logoutcontroller.logout);
module.exports = router;