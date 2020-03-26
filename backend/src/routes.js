const express = require('express');

const OngController = require('./controller/OngController');
const ProfileController = require('./controller/ProfileController');
const IncidentsController = require('./controller/IncidentsController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);
module.exports = routes;