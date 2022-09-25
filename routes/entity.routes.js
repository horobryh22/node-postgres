const Router = require('express');
const router = new Router();
const entityController = require('../controllers/entity.controller.js');


router.get('/items', entityController.getItems);


module.exports = router;