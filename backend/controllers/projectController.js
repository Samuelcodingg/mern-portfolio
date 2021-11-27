const Project = require('../models/Project');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.maxFileSize = 8000000;
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        let project = new Project(fields);
        
        if(files.photo) {
            if(files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            project.photo.data = fs.readFileSync(files.photo.path);
            project.photo.contentType = files.photo.type;
        }

        project.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json(result);
        });
    });
};

exports.getProjects = (req, res) => {
    Project.find().exec((err, projects) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(projects);
    });
};


exports.projectById = (req, res, next, id) => {
    Project.findById(id).exec((err, project) => {
        if(err || !project) {
            return res.status(400).json({
                error: 'Project not found'
            });
        }
        req.project = project;
        next();
    });
};

exports.getProjectById = (req, res, next) => {
    if(req.project) {
        return res.json(req.project);
    }
    next();
};

exports.photo = (req, res, next) => {
    if(req.project.photo.data) {
        res.set('Content-Type', req.project.photo.contentType);
        return res.send(req.project.photo.data);
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
        Project.findById(req.params.projectId)
            .exec((err, project) => {
                if(err) {
                    return res.status(400).json({
                        error: 'Project not found'
                    });
                }
                project.photo.data = fs.readFileSync(files.photo.path);
                project.photo.contentType = files.photo.type;
                project.save((err, result) => {
                    if(err) {
                        return res.status(400).json({
                            error: err
                        });
                    }
                    res.json(result);
                }
            );
        });
    });
};




