const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/script');
app.use("/script", postsRouter);

// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});