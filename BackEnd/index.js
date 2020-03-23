const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        mensage: 'Hello World'
    });
})

app.listen(3333);