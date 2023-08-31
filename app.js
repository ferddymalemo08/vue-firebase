const express = require('express');

// Set express app
const app = express();

// listen for requesrs
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile()
})
