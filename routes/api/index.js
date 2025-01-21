const router = require('express').Router();
const userRoutes = require('./userRoutes'); // Import user routes
const thoughtRoutes = require('./thoughtRoutes'); // Import thought routes

// Add /users and /thoughts routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;