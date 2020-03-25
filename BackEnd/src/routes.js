const express = require('express');
const OngController = require('./controller/ongController');
const IncidentController = require('./controller/incidentController');
const ProfileController = require('./controller/profileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);



module.exports = routes;