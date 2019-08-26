const Post = require('../models/post');

module.exports = {
  index,
  // addFact,
  // delFact
};

function index(req, res, next) {
  console.log(req.query)
  // find all posts from my database 
Post.find({}).sort()
  
}

// add and delete comments 
function addFact(req, res, next) {
  
}

function delFact(req, res, next) {

}