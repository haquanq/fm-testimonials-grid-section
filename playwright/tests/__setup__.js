const bs = require("browser-sync").create("s4444");

function globalSetup() {
  bs.init({
    server: "./build",
    port: 4444,
    open: false,
    ui: false,
    logLevel: "silent",
    notify: false,
  });
}

export default globalSetup;