const server = require("./lib/server");
const workers = require("./lib/workers");
const cli = require("./lib/cli");

const app = {};

app.init = callback => {
  server.init();
  workers.init();
  setTimeout(() => {
    cli.init();
    callback();
  }, 50);
};

// Self-invoking only if required directly.
if (require.main === module) {
  // this only calls app.init() if app.init() is required directly
  app.init(() => {});
}

module.exports = app;
