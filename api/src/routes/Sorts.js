const {Router} = require ('express');
const { sortByPopulation, sortAlphabetically } = require('../controllers/Sorts');

const router = Router();

router.get('/byPop', sortByPopulation);
router.get('/byAlpha', sortAlphabetically);

module.exports = router;