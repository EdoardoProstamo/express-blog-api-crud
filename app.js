const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/script');

// asset statici
app.use(express.static('public'));

// body-parser (application/json)
app.use(express.json());

// rotta router
app.use("/script", postsRouter);

// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});