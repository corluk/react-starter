
const { src, dest, series, watch } = require("gulp");
const eslint = require("gulp-eslint")
const prettier = require("gulp-prettier")
const babel = require("gulp-babel");
const clean = require("del");
const target = process.env.NODE_ENV === "production" ? "lib/" : "dev-ssr/";
const fnClean = (cb)=>{

    clean(["lib/**/*"]);
    cb();
};
const fnReact = (cb)=>{
    src(["src-server/**/*.js",
    
    "!./node_modules/**"])
             .pipe(babel())
             .pipe(eslint())
             .pipe(prettier())
             .pipe(dest(target));
    cb();

};

const cpFn = (cb)=>{

    src(["./src-server/**/*", "!src-server/**/*.js", "!src-server/**/*.jsx"] ).pipe(dest(target));
    cb();
};
const fnWatch = (cb)=>{
    watch(["src/*.js", "src/*.jsx"], series(fnClean, fnReact, cpFn));
    cb();

};

exports.build = series(fnClean, fnReact, cpFn);
exports.dev = series(fnClean, fnReact, cpFn, fnWatch);
exports.default = series(fnClean, fnReact, cpFn);

//exports.copy = cpFn
//exports.react = fnReact
