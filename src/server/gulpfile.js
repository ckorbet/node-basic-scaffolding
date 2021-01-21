const gulp = require('gulp');
const babel = require('gulp-babel');
var clean = require('gulp-clean');


const clean_dist = () => {
 return gulp.src('../../dist/server', {read: false, allowEmpty: true})
 .pipe(clean({force: true}));
};

const back_package = () => {
    return gulp.src('package.json')
        .pipe(gulp.dest('../../dist/server'));
};

const back_package_resources = () => {
    return gulp.src('resources/**/*' )
        .pipe(gulp.dest('../../dist/server/resources'));
};

const es6_back = () => { 
    return gulp.src(['**/*.js', '!test/**/*', '!gulpfile.js', '!node_modules/**/*'])
        .pipe(babel())
        .pipe(gulp.dest('../../dist/server'));

};

const es6_common = () => { 
    return gulp.src(['../common/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('../../dist/common'));

};

const back_node_modules = () => {
    return gulp.src(['node_modules/**/*'])
        .pipe(gulp.dest('../../dist/server/node_modules'));
};


const build = gulp.series( clean_dist, gulp.parallel(back_package, back_package_resources, es6_back, es6_common, back_node_modules));

exports.default = build;