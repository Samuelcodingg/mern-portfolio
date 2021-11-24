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

exports.getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
};

exports.skillById = async (req, res, next, id) => {
    const skill = await Skill.findById(id);
    if(!skill) {
        return res.status(404).json({
            error: 'Skill not found'
        });
    }
    req.skill = skill;
    next();
};

exports.photo = (req, res, next) => {
    if(req.skill.photo.data) {
        res.set('Content-Type', req.skill.photo.contentType);
        return res.send(req.skill.photo.data);
    }
    next();
};

exports.updatePhoto = (req, res) => {
    let form = new formidable.IncomingForm();
    form.maxFileSize = 8000000;

    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        Skill.findById(req.params.skillId)
            .exec((err, skill) => {
                if(err) {
                    return res.status(400).json({
                        error: 'Skill not found'
                    });
                }
                skill.photo.data = fs.readFileSync(files.photo.path);
                skill.photo.contentType = files.photo.type;
                skill.save()
                    .then(skill => res.json(skill))
                    .catch(err => res.status(400).json({
                        error: 'Photo could not be updated'
                    }));
            }
        );
    });
};