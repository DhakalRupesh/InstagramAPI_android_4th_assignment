const mongoose = require('mongoose');

const userPost = new mongoose.Schema({
    postedby_name: {
        type: String
    },
    sub_info: {
        type: String
    },
    likes: {
        type: String
    },
    view_comments: {
        type: String
    },
    time: {
        type: String
    },
    postedby_image: {
        type: String
    },
    post_image: {
        type: String
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('userpost', userPost)