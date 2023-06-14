// Declarations
const gitAPI = require('../services/gitApi.js');

// Controller Functions
const userList = async (req, res) => {
    let params = req.query;
    console.log(params);
    let result = await gitAPI.octokit.request("GET /users", {});
    res.status(result.status).json({response: result});
}

const userDetails = async (req, res) => {
    let user = req.params.username;
    let result = await gitAPI.octokit.request("GET /users/{user}", {user});
    res.status(result.status).json({response: result});
}

const userRepos = async (req, res) => {
    let user = req.params.username;
    let result = await gitAPI.octokit.request("GET /users/{user}/repos", {user});
    res.status(result.status).json({response: result});
}

// Exportation
module.exports = {
    userList,
    userDetails,
    userRepos
};