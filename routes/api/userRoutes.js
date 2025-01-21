const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Routes for getting all users and creating a new user
router.route('/').get(getUsers).post(createUser);
// Routes for operations on a single user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// Routes for adding and removing friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;