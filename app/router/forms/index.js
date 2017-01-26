var express = require('express');
//importar el controlador con distintas funciones en controller
var controller = require('./controller');

//traer el singleton 
var router = express.Router();
router.post('/', controller.newEntry);
router.get('/', controller.fetch);
router.delete('/:rec_id', controller.delete);
router.get('/on-progress', controller.getOnProgress);

router.post('/set-status', controller.setStatus);
router.post('/set-checklist', controller.setChecklist);
router.post('/set-doctor', controller.setDoctor);
router.post('/set-date', controller.setHospitalDate);


module.exports = router;