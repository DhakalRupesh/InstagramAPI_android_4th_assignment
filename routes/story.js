const express = require('express');
const Post = require('../models/story');
const router = express.Router();

router.route('/')

 .get((req, res, next)=>{
    Post.find()
    .then((story)=>{
        res.json(story)
    }).catch(next);
 })

 .post((req, res, next)=>{
    Post.create(req.body)
    .then((story)=>{
        res.statusCode = 201;
        res.json(story);
    }).catch(next);
 });

module.exports = router;