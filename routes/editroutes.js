const express=require('express');

const router=express.Router();

const editcontroller=require('../controllers/editcontroller');

router.post('/edit/:user',editcontroller.edit_page);
router.post('/editinput',editcontroller.edit_value)

module.exports = router;