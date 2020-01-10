const express = require('express');
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// router.get('/users', (req, res, next)=>{
//     user.find({})
//     .then((users)=>{
//         res.json(users);
//     }).catch(next);
// });

router.post('/register', (req, res, next)=>{
    let password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash){
        if(err){
            throw new Error('could not hash the password');
        }user.create({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: hash
        }).then((user)=>{
            let token = jwt.sign({ _id: user._id }, process.env.SECRET)
            res.json({ status: "Signup success", user: user._id, token:token});
        }).catch(next);
    });
});

router.post('/login', (req, res, next)=>{
    user.findOne({ username: req.body.username })
    .then((users)=> {
        if( users == null ){
            let err = new Error("Sorry User not found");
            err.status = 401;
            return next(err);
        } else {
            bcrypt.compare(req.body.password, users.password)
            .then((ismatch)=>{
                if(!ismatch) {
                    let err = new Error('password does not match')
                    err.status = 401;
                    return next(err);
                }
                let token = jwt.sign({ _id: users._id }, process.env.SECRET);
                res.json({ status: 'login successful', user: users._id, token: token});
            }).catch(next);
        }
    }).catch(next);
});

module.exports = router;
