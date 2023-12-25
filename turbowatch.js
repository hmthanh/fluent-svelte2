const fs = require("fs");
const { spawn } = require("child_process");
const path = require("path");

/** SETUP */
const projectRootDirectory = process.cwd();
const packagesDirectory = path.join(projectRootDirectory, "packages");
const commandToRun = "turbo run build --filter=./packages/*";

// Only watch changes under src/ to stop infinite loops.
const srcDirectoryRegex = /^[^/]+\/src\/.*\.(js|ts)$/;
function runBuildPackages() {
  const command = spawn(commandToRun, [], {
    shell: true,
    stdio: "inherit",
  });
  command.on("error", (err) => {
    console.error(`Error running command: ${err}`);
  });
}

/** SCRIPT START */
console.log(
  "🚧 Running initial build:packages, to make sure everything is up to date."
);
runBuildPackages();
console.log(
  "👀 Watching packages/<package-name>/src/*.(js|ts) files to rebuild."
);

fs.watch(packagesDirectory, { recursive: true }, (eventType, filename) => {
  if (eventType === "change" || eventType === "rename") {
    if (srcDirectoryRegex.test(filename)) {
      console.log(
        `Detected ${eventType} in ${filename}. Running command: ${commandToRun}`
      );
      runBuildPackages();
    }
  }
});