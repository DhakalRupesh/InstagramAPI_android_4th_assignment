const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: false
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profile_image: {
        type: String,
        required:false 
    }
},{ timestamp: true });

module.exports = mongoose.model('User', userSchema)