const express = require('express');
const router = express.Router();
const Company = require('../models/company');


router.post('/', (req, res) => {
    if (!req.body.name || !req.body.phoneNumber) {
        return res.status(400).send('Empty field!');
    };

    Company.findOne({name: req.body.name.trim()}, (err, existCompany) => {
        if (err) return res.status(500).send('Something went wrong!');
        if (existCompany) return res.status(406).send('Company name already exist!');

        const NEW_COMPANY = new Company({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber
        });

        NEW_COMPANY.save((err, company) => {
            if (err) return res.status(500).send('Something went wrong!');

            res.json(company)
        });
    });
});



module.exports = router;