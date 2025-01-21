const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Routes for getting all thoughts and creating a new thought
router.route('/').get(getThoughts).post(createThought);
// Routes for operations on a single thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// Routes for adding and removing reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;