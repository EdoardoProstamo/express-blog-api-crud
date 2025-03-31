const posts = require('../data/posts');

function index (req, res) {
    router.get('/', (req, res) => {
        res.send(posts);
    });
};

function show (req, res) {
    router.get('/:id', (req, res) => {
        res.send(posts + req.params.id);
    });
};

function modify (req, res) {
    router.patch('/:id', (req, res) => {
        console.log(req.params.id);
    });
};

function store (req, res) {
    router.post('/', (req, res) => {
        res.send('Aggiunta nuovo post');
    });
};

function update (req, res) {
    router.put('/:id', (req, res) => {
        console.log('Modifico il post tramite id');
    });
};

function destroy (req, res) {
    router.delete('/:id', (req, res) => {
        console.log('Elimino il post tramite id');
    });
};

module.exports = { index, show, modify, store, update, destroy};