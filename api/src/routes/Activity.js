const {Router}= require ('express');
const { createActivity } = require('../controllers/Activity');


const router = Router(); 

router.post('/', createActivity)

module.exports = router;