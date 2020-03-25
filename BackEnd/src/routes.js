const express = require('express');
const routes = express.Router();

routes.post('/', (request, response) => {
    return response.json(request.body);
})

module.exports = routes;