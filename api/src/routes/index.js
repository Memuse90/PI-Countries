const { Router } = require('express');
// Importar todos los routers;
const Countries = require('./Countries.js');
const Activity = require ('./Activity');

const router = Router();

// Configurar los routers
router.use('/countries', Countries);
//router.use('/activity', Activity)

module.exports = router;
