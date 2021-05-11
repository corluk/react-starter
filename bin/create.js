#!/usr/bin/env node

const packageJSON = require("../package.json");

const spawn = require("child_process").execSync;
var dependencies = Object.keys(packageJSON.dependencies);
const devDependencies = Object.keys(packageJSON.devDependencies);
const copy = require("copy");
const ncp = require("ncp").ncp;
const fs = require("fs");
const path = require("path");
const homeDir = path.resolve(__dirname, "..");

if (process.argv.length < 3) {
  throw new Error("you must set folder name to install ");
}
const projectName = process.argv[2];
const projectDir = path.resolve(process.cwd(), projectName);
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir);
}

/// copy config files

process.chdir(projectDir);

const newPackageJSON = {
  name: projectName,
  version: "1.0.0",
  main: "index.js",
  scripts: packageJSON.scripts,
  license: packageJSON.license,
  author: packageJSON.author,
};

const strNewPackageJSON = JSON.stringify(newPackageJSON, null, 4);

fs.writeFileSync(path.resolve(projectDir, "package.json"), strNewPackageJSON);

copy(
  [path.resolve(homeDir, "*.js"), path.resolve(homeDir, ".gitignore"), path.resolve(homeDir, "Dockerfile")],
  projectDir,
  (err ) => {
    if (err) {
      throw new Error(err.message);
    }
  }
);

ncp(path.resolve(homeDir, "src"), path.resolve(projectDir, "src"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("done, copying src files !");
  return null;
});
ncp(path.resolve(homeDir, "test"), path.resolve(projectDir, "test"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("done copying test files !");
  return null;
});
dependencies = dependencies.filter((item) => ["ncp", "copy"].indexOf(item) < 0);

 spawn(` yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
 spawn(` yarn add -D  ${devDependencies.join(" ")}`, { stdio: "inherit" });

 console.log("Finished!");
