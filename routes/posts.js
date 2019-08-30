var router = require('express').Router();
var postCtrl = require('../controllers/posts');

// GET /posts
router.get('/', postCtrl.index);
router.get('/:id', isLoggedIn, postCtrl.show);
router.post('/:id/comments', isLoggedIn, postCtrl.addComment);
router.delete('/:id', isLoggedIn, postCtrl.deletefunk); 

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

// posting comment...
router.post('/', postCtrl.create);

module.exports = router;
