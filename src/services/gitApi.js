// Declarations
const { Octokit } = require('octokit');

// API
const octokit = new Octokit({
    auth: process.env.TOKENGIT
});

// Exportation
module.exports = {
    octokit
};