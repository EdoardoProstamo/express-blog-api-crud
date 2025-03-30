const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// rotta index
router.get('/', (req, res) => {
    res.send(posts);
});
