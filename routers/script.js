const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// rotta index
router.get('/', pizzacontroller.index);

// rotta show
router.get('/:id', pizzacontroller.index);

//rotta modify
router.patch('/:id', pizzacontroller.index);

//rotta store
router.post('/', pizzacontroller.index);

//rotta update
router.put('/:id', pizzacontroller.index);

//rotta destroy
router.delete('/:id', pizzacontroller.index);

module.exports = router;