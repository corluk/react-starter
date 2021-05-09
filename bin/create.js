#!/usr/bin/env node

const packageJSON  = require("../package.json") 
const exec = require("child_process").execSync
const dependencies =  Object.keys(packageJSON.dependencies) 
const devDependencies = Object.keys(packageJSON.devDependencies)
 
console.log(process.argv)
exec(` yarn add ${dependencies.join(" ")}`)
exec(` yarn add -D  ${devDependencies.join(" ")}`)

