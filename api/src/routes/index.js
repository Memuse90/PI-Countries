const { Router } = require('express');
// Importar todos los routers;
const Countries = require('./Countries.js');
const Activity = require ('./Activity.js');
const Sorts = require ('./Sorts');

const router = Router();

// Configurar los routers
router.use('/countries', Countries);
router.use('/activity', Activity);
router.use('/sorts', Sorts);

module.exports = router;
