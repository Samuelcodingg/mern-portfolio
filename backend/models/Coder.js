const mongoose = require('mongoose');

const coderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        first_description: {
            type: String,
            required: true
        },
        second_description: {
            type: String,
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Coder', coderSchema);


