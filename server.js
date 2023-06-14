// Declarations
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const api = express();
const routes = require('./src/routes');
const port = process.env.PORT || 3333;

// Execution
api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use('/', routes);
api.listen(port);
console.log('Running API Express on Port: ' + port);