const Post = require('../models/post');

module.exports = {
  index,
  create,
  show,
  addComment,
  deletefunk
};

function addComment(req, res) {

  Post.findById(req.params.id, function (e, post) {
    req.body.user = req.user
    if (req.user.name) {
      req.body.commenterName = req.user.name
    }
    post.comments.push(req.body)
    post.save(function (err) {
      if (err) res.redirect('back')
      res.redirect('/posts')
    })
  })
}

function show(req, res) {
  Post.findById(req.params.id, function (e, post) {
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
        posts,
        user: req.user,
        name: req.query.name,
      }
    );
  });
}

function create(req, res, next) {

  Post.create(req.body)
  res.redirect('/posts')
}

function deletefunk(req, res, next) {
  Post.findByIdAndDelete(req.params.id, function (err) {
    res.redirect('/');
  });
}
