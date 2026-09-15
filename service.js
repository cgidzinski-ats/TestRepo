const config = require("./config.json");

function startService() {
  console.log(`Starting ${config.appName} v${config.version}`);
}

module.exports = { startService };
