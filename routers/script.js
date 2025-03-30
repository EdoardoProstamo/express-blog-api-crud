const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// rotta index
router.get('/', (req, res) => {
    res.send(posts);
});

// rotta show
router.get('/script/:id', (req, res) => {
    res.send(posts + req.params.id);
});

//rotta modify
router.patch();

//rotta store
router.post();

//rotta update
router.put();

//rotta destroy
router.delete();