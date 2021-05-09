 
const { src, dest ,series ,del   } = require('gulp');
const  babel = require("gulp-babel")
const clean  = require("del")
const fnClean = (cb)=>{

    clean["output/**/*"]
    cb()
}
const fnReact = (cb)=>{
    src(['src/**/*.jsx',
    'src/**/*.js',
    '!./node_modules/**'])
             .pipe(babel())
             .pipe(dest("output/"))
    cb()

}

const cpFn = (cb)=>{

    src(["./src/**/*","!src/**/*.js","!src/**/*.jsx"] ).pipe(dest("output/"))
    cb()
}
exports.copy = cpFn 
exports.default = series(fnClean,fnReact,cpFn)
 
//exports.copy = cpFn
//exports.react = fnReact
 