const {Router} = require ('express');
const {getAllCountries} = require ('../controllers/Countries')
const router = Router();

router.get('/', getAllCountries);

module.exports = router;