const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        description: {
            type: String,
            required: true
        },
        web: {
            type: String,
        },
        github: {
            type: String,
        },
        technologies: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Project', projectSchema);