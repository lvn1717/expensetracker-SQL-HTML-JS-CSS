const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/', analyticsController.viewAnalytics);

module.exports = router;


module.exports = router;





