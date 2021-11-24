const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Skill', skillSchema);