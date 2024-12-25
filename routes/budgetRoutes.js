const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

router.get('/', budgetController.viewBudgets);
router.post('/add', budgetController.addBudget);
router.post('/delete/:id', budgetController.deleteBudget);

module.exports = router;



