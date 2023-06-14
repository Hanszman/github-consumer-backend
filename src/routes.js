// Declarations
const express = require('express');
const routes = express.Router();
const user = require('./controllers/userController.js');

// Routes
routes.get('/', (req, res) => res.json({ msg: 'API Online!' }));
routes.get('/api', (req, res) => res.json({ msg: 'Select the right path!' }));
routes.get('/api/users', user.userList); // This endpoint returns a list of GitHub users and the link for the next page.
routes.get('/api/users/:username/details', user.userDetails); // This endpoint returns the details of a GitHub user.
routes.get('/api/users/:username/repos', user.userRepos); // This endpoint returns a list with all user repositories.

// Exportation
module.exports = routes;