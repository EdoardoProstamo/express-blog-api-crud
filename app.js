const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/script');
//error 500
const errorsCatcher = require('./middlewares/errorsCatcher');

// asset statici
app.use(express.static('public'));

// body-parser (application/json)
app.use(express.json());

// rotta router
app.use("/script", postsRouter);

//error 500
app.use(errorsCatcher);

// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});