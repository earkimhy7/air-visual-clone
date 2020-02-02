const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lang: {
        type: Number,
        required: true
    }
})

const Location = mongoose.model('Location', LocationSchema);

module.exports = {
    Location
}