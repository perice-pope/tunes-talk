const Post = require('../models/post');

module.exports = {
  index,
  create,
  show,
  addComment
  // delFact
};

function addComment(req,res){

  Post.findById(req.params.id, function(e, post){
    req.body.user = req.user
    if(req.user.name){
      req.body.commenterName = req.user.name
    }
    post.comments.push(req.body)
    post.save(function(err){
      if(err) res.redirect('back')
      res.redirect('/posts')
    })
  })
}

function show(req, res){
  Post.findById(req.params.id, function(e, post){
    res.render('posts/show', {
      post, 
      user: req.user,
      name: req.query.name
    })
  })
}

function index(req, res) {
  console.log(req.query) 
  Post.find({}, function (err, posts) {
    res.render('index',
      { 
        // show all previous posts from the model
        posts,
        user: req.user,
        name: req.query.name,
      }
      );
  });
}

// create post... using .save ect.  
function create(req, res, next) {

  // res.send('hello')
    Post.create(req.body)
    res.redirect('/posts')
  }
 
// delete 