const express=require('express');

const router=express.Router();

const editcontroller=require('../controllers/editcontroller');

router.post('/edit/:user',editcontroller.edit_page);
router.post('/editinput/:usern',editcontroller.edit_value);
router.post('/back/:userni',editcontroller.back);


module.exports = router;