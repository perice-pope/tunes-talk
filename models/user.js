var mongoose = require('mongoose');
  
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String, 
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

