const bs = require("browser-sync").get("s4444");

function globalTeardown() {
  bs.exit();
}

export default globalTeardown;
