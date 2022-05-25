const express=require('express');

const router=express.Router();

const questioncontroller=require('../controllers/questioncontroller');

router.get("/question/:number",questioncontroller.questdisplay);

router.post('/question',questioncontroller.answsubmit);


module.exports = router;