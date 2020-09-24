var express = require('express');
var router = express.Router();

const doctorController = require('../controllers/doctorController');

/* GET home page. */
router.get('/', doctorController.index);
router.get('/register', doctorController.create);
router.post('/register', doctorController.store);
router.get('/list', doctorController.show);
router.get('/delete/:id', doctorController.delete);
router.get('/edit/:id', doctorController.edit);
router.post('/edit', doctorController.update);
router.get('/search', doctorController.search);
router.post('/search', doctorController.find);

module.exports = router;
