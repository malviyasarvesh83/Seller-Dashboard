const Seller = require('../models/seller');

exports.getSeller = async (req, res, next) => {
    try {
        const response = await Seller.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Seller Api' });
    }
}

exports.addSeller = async (req, res, next) => {
    try {
        const response = await Seller.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
        });
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Add Seller Api' });
    }
}

exports.getSellerById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Seller.findByPk(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Seller By Id Api' });
    }
}

exports.postSellerById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const response = await Seller.findByPk(id);
        const updatedQuantity = req.body.quantity;
        response.quantity = updatedQuantity;
        response.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: 'Error while calling Get Seller By Id Api' });
    }
}