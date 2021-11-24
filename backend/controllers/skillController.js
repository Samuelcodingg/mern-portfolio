const Skill = require('../models/Skill');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.createSkill = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        let skill = new Skill(fields);

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb'
                });
            }
            skill.photo.data = fs.readFileSync(files.photo.path);
            skill.photo.contentType = files.photo.type;
        }
        try {
            await skill.save();
            res.json(skill);
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });
};