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
router.patch('/:id', (req, res) => {
    console.log(req.params.id);
});

//rotta store
router.post('/', (req, res) => {
    res.send('Aggiunta nuovo post');
});

//rotta update
router.put('/:id', (req, res) => {
    console.log('Modifico il post tramite id');
});

//rotta destroy
router.delete('/:id', (req, res) => {
    console.log('Elimino il post tramite id');
});

module.exports = router;