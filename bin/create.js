#!/usr/bin/env node 


const packageJSON  = require("../package.json") 


const exec = require("child_process").execSync
const dependencies =  Object.keys(packageJSON.dependencies) 
const devDependencies = Object.keys(packageJSON.devDependencies)
const  fs = require('fs');
const path = require("path")
const  home_dir  = process.cwd();

const babelConfig = path.resolve("..","babel.config.js")
const eslintConfig =  path.resolve("..","babel.config.js")
if(process.argv.length < 3){
    throw new Error("you must set folder name to install ")
}
const projectName = process.argv[2]
const project_dir = path.resolve(home_dir,projectName)
if (!fs.existsSync(project_dir)){
    fs.mkdirSync(project_dir);
}
process.chdir(project_dir)

const newPackageJSON = {
    name: projectName,
    version : "1.0.0",
    main : "index.js",
    scripts:  packageJSON.scripts
}

console.log(JSON.stringify(newPackageJSON, null, 4))


console.log(process.argv)
//exec(` yarn add ${dependencies.join(" ")}`)
//exec(` yarn add -D  ${devDependencies.join(" ")}`)
fs.writeFileSync(project_dir,"package.json",newPackageJSON) 
fs.copyFile()