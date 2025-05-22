// index.js
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const context = github.context;
    const author = context.payload.sender.login;
    core.info(`👋 Hello, ${author}! Thanks for your contribution.`);
} catch (error) {
    core.setFailed(error.message);
}
