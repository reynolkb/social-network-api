const router = require('express').Router();

// this code
// router.route('/').get(getCallbackFunction).post(postCallbackFunction);

// is this same as this
// router.get('/', getCallbackFunction);
// router.post('/' postCallbackFunction);


const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get()
    .post();

// /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

// /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

module.exports = router;