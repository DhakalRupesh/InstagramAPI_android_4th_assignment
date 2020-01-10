const express = require('express');
const Post = require('../models/userpost');
const router = express.Router();

router.route('/')

 .get((req, res, next)=>{
    Post.find()
    .then((posts)=>{
        res.json(posts)
    }).catch(next);
 })

 .post((req, res, next)=>{
    Post.create(req.body)
    .then((posts)=>{
        res.statusCode = 201;
        res.json(posts);
    }).catch(next);
 });

module.exports = router;