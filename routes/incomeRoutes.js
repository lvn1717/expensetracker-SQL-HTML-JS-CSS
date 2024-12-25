const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.viewIncome);
router.post('/add', incomeController.addIncome);
router.post('/delete/:id', incomeController.deleteIncome);

module.exports = router;

