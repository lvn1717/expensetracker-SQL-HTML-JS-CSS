const express = require('express');
const router = express.Router();
const recurringController = require('../controllers/recurringController');

router.get('/', recurringController.viewRecurring);
router.post('/add', recurringController.addRecurring);
router.post('/delete/:id', recurringController.deleteRecurring);

module.exports = router;


