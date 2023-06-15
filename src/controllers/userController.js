// Declarations
const gitAPI = require('../services/gitApi.js');

// Controller Functions
const userList = async (req, res) => {
    try {
        const params = req.query;
        const since = params.since ? params.since : '';
        const perPage = params.per_page ? params.per_page : '';
        const result = await gitAPI.octokit.request("GET /users?since={since}&per_page={perPage}", {since, perPage});
        if (result?.status === 200) {
            const lastUser = result.data[result.data.length-1].id;
            result.nextPageUrl = `${process.env.HOST}:${process.env.PORT}/api/users?since=${lastUser}&per_page=${perPage}`;
            res.status(result.status).json({error: false, response: result});
        }
    } catch (error) {
        console.log(error);
        res.status(error.status).json({error: true, response: {}});
    }
}

const userDetails = async (req, res) => {
    try {
        const user = req.params.username;
        const result = await gitAPI.octokit.request("GET /users/{user}", {user});
        if (result?.status === 200) {
            res.status(result.status).json({error: false, response: result});
        }
    } catch (error) {
        console.log(error);
        res.status(error.status).json({error: true, response: {}});
    }
}

const userRepos = async (req, res) => {
    try {
        const user = req.params.username;
        const result = await gitAPI.octokit.request("GET /users/{user}/repos", {user});
        if (result?.status === 200) {
            res.status(result.status).json({error: false, response: result});
        }
    } catch (error) {
        console.log(error);
        res.status(error.status).json({error: true, response: {}});
    }
}

// Exportation
module.exports = {
    userList,
    userDetails,
    userRepos
};