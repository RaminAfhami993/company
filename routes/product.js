const express = require('express');
const router = express.Router();
const Company = require('../models/company');
const Product = require('../models/product');



router.post('/', (req, res) => {
    if (!req.body.name || !req.body.type || !req.body.productionDate || !req.body.companyId) {
        return res.status(400).send('Empty field!');
    };

    Company.findById(req.body.companyId, (err, company) => {
        if (err) return res.status(500).send('Somthing went wrong! \n' +  err);
        if (!company) return res.status(404).send("Company Doesn't exist");

        const NEW_PRODUCT = new Product({
            type: req.body.type,
            name: req.body.name,
            productionDate: req.body.productionDate,
            companyId: req.body.companyId
        });


        NEW_PRODUCT.save((err, product) => {
            if (err) return res.status(500).send('Somthing went wrong! \n' +  err);

            return res.json(product);
        });
    });
});



module.exports = router;