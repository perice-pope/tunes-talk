const User = require('../models/posts');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('/index', { 
      users,
      user: req.user,  
      name: req.query.name, 
      sortKey 
    });
  });
}

// add and delete comments 
function addFact(req, res, next) {
  
}

function delFact(req, res, next) {

}