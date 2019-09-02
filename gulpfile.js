const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const webpack_stream = require('webpack-stream');
const webpack_config = require('./webpack.config');

sass.compiler = require('node-sass');

const sassOptions = {
	outputStyle: 'compressed'
};

function compileSass() {
	return src('./src/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(rename('styles.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./static/css'));
}

function compileJS() {
	return webpack_stream(webpack_config)
		.pipe(dest('./static'));
}

function compileOnChange() {
	watch('./src/scss/**/*.scss', compileSass);
	watch('./src/js/**/*.js', compileJS);
}

exports.default = compileSass;
exports.watch = compileOnChange;
exports.js = compileJS;
exports.sass = compileSass;