var express = require('express');
var router = express.Router();
var Comments = require('../models/comments.js');

router.get('/', function(req,res){
    Comments.find({}, function(err, foundComments){
        res.json(foundComments);
    });
});

router.post('/', function(req,res){
    Comments.create(req.body, function(err, createdComment){
        res.json(createdComment);
    });
});

router.delete('/:id', function(req, res){
    Comments.findByIdAndRemove(req.params.id, function(err, removedComment){
        res.json(removedComment);
    });
});

router.put('/:id', function(req, res){
    Comments.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedComment){
        res.json(updatedComment);
    });
});

module.exports = router;
