const posts = require('../data/posts');


function index (req, res) {
    res.json(posts);
};

function show (req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.json ({
            error: "Not found",
            message: "Errore. Nessun elemento corrispondente trovato" 
        });
    };
    res.json(post);
};

// function modify (req, res) {
//     res.send("Modifica del post");
// };

function store (req, res) {

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    console.log(newPost);
    
    posts.push(newPost);
    res.status(201); // lo status 201 indica la creazione di un nuovo elemento

    res.json('Aggiunta nuovo post');
};

function update (req, res) {
    res.send("Modifica del post tramite id. Id = " + req.params.id);
};

function destroy (req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json ({
            error: "Not found",
            message: "Errore. L'elemento è stato eliminato" 
        });
    };
    
    posts.splice(posts.indexOf(post), 1);

    res.sendstatus(204);
};

module.exports = { index, show, store, update, destroy};