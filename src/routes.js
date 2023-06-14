// Declarations
const express = require('express');
const routes = express.Router();
const user = require('./controllers/userController.js');

// Routes

// GET
routes.get('/', (req, res) => res.json({ msg: 'API Online!' }));
// routes.get('/user/read/', user.userRead);
// routes.get('/user/read/:id', user.userRead);

// Exportation
module.exports = routes;

// GET - /api/users?since={number}
// This endpoint must return a list of GitHub users and the link for
// the next page.
// 
// GET - /api/users/:username/details
// This endpoint must return the details of a GitHub user
// 
// GET - /api/users/:username/repos
// This endpoint must return a list with all user repositories
