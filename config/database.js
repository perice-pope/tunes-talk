// mongoose.connect(process.env.MONGODB_URI || ''

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;