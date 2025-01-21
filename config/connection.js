const mongoose = require('mongoose');

// MongoDB connection string
const connectionString = 'mongodb://127.0.0.1:27017/socialNetworkDB';

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listeners for connection events
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = mongoose.connection;


//from miniproject

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;