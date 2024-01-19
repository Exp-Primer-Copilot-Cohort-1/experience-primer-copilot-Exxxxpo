// Create web server

var express = require('express');
var router = express.Router();
var db = require('../models/db');

// Get all comments
router.get('/', function(req, res) {
    db.Comment.findAll().then(function(comments) {
        res.json(comments);
    });
});

// Get a comment
router.get('/:id', function(req, res) {
    db.Comment.find({
        where: {
            id: req.params.id
        }
    }).then(function(comment) {
        res.json(comment);
    });
});

