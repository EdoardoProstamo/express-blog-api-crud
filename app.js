const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/script');

// rotta router
app.use("/script", postsRouter);
// asset statici
app.use(express.static('public'));
// json
app.use(express.json());

// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});