var express = require('express');
//importar el controlador con distintas funciones en controller
var controller = require('./controller');

//traer el singleton 
var router = express.Router();
router.post('/', controller.newEntry);
router.get('/', controller.fetch);

module.exports = router;