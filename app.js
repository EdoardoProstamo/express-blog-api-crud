const express = require('express');
const app = express();
const port = 3000;

// rotta '/'
app.get('/', (req, res) => {
    res.send('Ciao');
});







// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});