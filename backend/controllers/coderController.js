const Coder = require('../models/Coder');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.createCoder = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        let coder = new Coder(fields);

        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb'
                });
            }
            coder.photo.data = fs.readFileSync(files.photo.path);
            coder.photo.contentType = files.photo.type;
        }
        try {
            await coder.save();
            res.json(coder);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });
};

exports.getCoders = async (req, res) => {
    const coders = await Coder.find();
    res.json(coders);
};

exports.coderById = async (req, res, next, id) => {
    const coder = await Coder.findById(id);
    if(!coder) {
        return res.status(404).json({
            error: 'Coder not found'
        });
    }
    req.coder = coder;
    next();
};

exports.photo = (req, res, next) => {
    if(req.coder.photo.data) {
        res.set('Content-Type', req.coder.photo.contentType);
        return res.send(req.coder.photo.data);
    }
    next();
};