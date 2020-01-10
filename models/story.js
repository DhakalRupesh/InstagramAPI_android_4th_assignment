const mongoose = require('mongoose');

const story = new mongoose.Schema({
    story_image: {
        type: String
    },
    story_posted_by: {
        type: String
    }
});

module.exports = mongoose.model('story', story)