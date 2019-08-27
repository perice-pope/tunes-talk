var router = require('express').Router();
var postCtrl = require('../controllers/posts');

// GET /posts
router.get('/', postCtrl.index);
router.get('/:id', postCtrl.show);

// posting comment...
router.post('/', postCtrl.create);


// router.post('/index', studentsCtrl.addFact);
// DELETE /facts/:id
// router.delete('/index/:id', studentsCtrl.delFact);

module.exports = router;