const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});


module.exports = mongoose.model('Company', CompanySchema);



