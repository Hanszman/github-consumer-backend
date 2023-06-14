// Declarations
const gitAPI = require('../services/gitApi.js');

// Controller Functions
const userList = async (req, res) => {
    const params = req.query;
    const since = params.since ? params.since : '';
    const perPage = params.per_page ? params.per_page : '';
    const result = await gitAPI.octokit.request("GET /users?since={since}&per_page={perPage}", {since, perPage});
    const lastUser = result.data[result.data.length-1].id;
    result.nextPageUrl = `${process.env.HOST}:${process.env.PORT}/api/users?since=${lastUser}&per_page=${perPage}`;
    res.status(result.status).json({response: result});
}

const userDetails = async (req, res) => {
    const user = req.params.username;
    const result = await gitAPI.octokit.request("GET /users/{user}", {user});
    res.status(result.status).json({response: result});
}

const userRepos = async (req, res) => {
    const user = req.params.username;
    const result = await gitAPI.octokit.request("GET /users/{user}/repos", {user});
    res.status(result.status).json({response: result});
}

// Exportation
module.exports = {
    userList,
    userDetails,
    userRepos
};