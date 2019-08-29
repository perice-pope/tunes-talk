var router = require('express').Router();
var postCtrl = require('../controllers/posts');

// GET /posts
router.get('/', postCtrl.index);
router.get('/:id', postCtrl.show);
router.post('/:id/comments', postCtrl.addComment);
router.delete('/:id', postCtrl.deletefunk); 

// posting comment...
router.post('/', postCtrl.create);

module.exports = router;