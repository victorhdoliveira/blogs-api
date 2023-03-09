const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken } = require('../middleware/tokenValidation');
const { categoryValidation } = require('../middleware/category.middleware');

const router = express.Router();

router.use(validateToken);
router.post('/', categoryValidation, categoryController.insertCategory);
router.get('/', categoryController.getCategories);

module.exports = router;