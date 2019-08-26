var mongoose = require('mongoose');

// The postSchema is used to embedded docs in a user doc? 

var commentSchema = new mongoose.Schema({
  // user: { type:  Schema.Types.ObjectId, ref: 'User'},
  //  commenterName: String,
      text: String,    
    });

var postSchema = new mongoose.Schema({
  song: { title: String,
          artist: String, 
    },
    comments: [commentSchema]
}, {
  timestamps: true
});
  
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String, 
  posts: [postSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);