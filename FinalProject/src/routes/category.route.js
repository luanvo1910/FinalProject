const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');

router.use('/', categoryController.index);

module.exports = router;