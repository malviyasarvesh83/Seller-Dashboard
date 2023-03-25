const express = require('express');
const router = express.Router();
const { getSeller, addSeller, postSellerById, getSellerById } = require('../controller/seller-controller');

router.get('/seller', getSeller);
router.post('/seller', addSeller);
router.get('/seller/:id', getSellerById);
router.put('/seller/:id',postSellerById);

module.exports = router;