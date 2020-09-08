var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get("/:id", moviesController.find);

router.post("/crear", moviesController.create);

module.exports = router;