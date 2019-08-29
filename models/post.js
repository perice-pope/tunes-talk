var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    commenterName: String,
    text: String,
},
    {
        timestamps: true
    });

var postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    artist: String,
    description: String,
    comments: [commentSchema],
    link: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Post', postSchema);