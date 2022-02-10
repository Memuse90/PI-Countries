const {Router} = require ('express');
const {getAllCountries, getCountriesByCode, getCountriesByName} = require ('../controllers/Countries')
const router = Router();

router.get('/get', getCountriesByName);
router.get('/', getAllCountries);
router.get('/:id', getCountriesByCode);

module.exports = router;