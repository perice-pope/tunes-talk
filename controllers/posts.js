const Post = require('../models/post');

module.exports = {
  index,
  // addFact,
  // delFact
};

function index(req, res) {
  console.log(req.query)
  // find all posts from my database use .sort 
  Post.find({}, function (err, posts) {
    res.render('index',
      { // show all previous posts from the model
        posts,
        user: req.user,
        name: req.query.name,
        
        // song,
        // comments
      });
  });
}

//add and delete comments 
function addFact(req, res, next) {

}

function delFact(req, res, next) {

}