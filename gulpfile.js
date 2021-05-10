 
const { src, dest ,series ,watch  } = require('gulp');
const  babel = require("gulp-babel")
const clean  = require("del");
const target  =  process.env.NODE_ENV === 'production' ? 'lib/' : 'dev-lib/'
const fnClean = (cb)=>{

    clean["lib/**/*"]
    cb()
}
const fnReact = (cb)=>{
    src(['src/**/*.jsx',
    'src/**/*.js',
    '!./node_modules/**'])
             .pipe(babel())
             .pipe(dest(target))
    cb()

}

const cpFn = (cb)=>{

    src(["./src/**/*","!src/**/*.js","!src/**/*.jsx"] ).pipe(dest(target))
    cb()
}
const fnWatch = (cb)=>{
    watch(["src/front/*.js","src/front/*.jsx"],series(fnClean,fnReact,cpFn))
    cb()

}
 
exports.build = series(fnClean,fnReact,cpFn)
exports.dev = series(fnClean,fnReact,cpFn,fnWatch) 
exports.default = series(fnClean,fnReact,cpFn)
 
//exports.copy = cpFn
//exports.react = fnReact
 