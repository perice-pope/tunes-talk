var mongoose = require('mongoose');

// The postSchema is used to embedded docs in a user doc? 

var postSchema = new mongoose.Schema({
  song: { title: String,
          artist: String, 
    },
    comment: String
}, {
  timestamps: true
});

var commentSchema = new mongoose.Schema({
// user: { type:  Schema.Types.ObjectId, ref: 'User'},
//  commenterName: String,
    comment: String,    
  });
  
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);