const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;