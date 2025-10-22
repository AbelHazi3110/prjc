const express = require('express');
const router = express.Router();
const landlordController = require('../controllers/landlordController');

router.get('/', landlordController.getAllLandlords);
router.get('/:id', landlordController.getLandlordById);
router.post('/', landlordController.createLandlord);
router.put('/:id', landlordController.updateLandlord);
router.delete('/:id', landlordController.deleteLandlord);

module.exports = router;
