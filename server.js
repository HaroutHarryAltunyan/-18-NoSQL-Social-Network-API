const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express(); // Initialize the Express app

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes defined in `routes/index.js`
app.use(routes);

// Start the server once the database connection is open
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// incorrect code 
// const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');
// app.use(routes);

// const PORT = 3001;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });


//miniproject 

// const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');

// const PORT = 3001;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });