const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const webpack_stream = require('webpack-stream');
const webpack_config = require('./webpack.config');
const browsersync = require('browser-sync').create();

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
		.pipe(dest('./static/css'))
		.pipe(browsersync.stream());
	}
	
	function compileJS() {
		return webpack_stream(webpack_config)
		.pipe(dest('./static'))
		.pipe(browsersync.stream());
}

function compileOnChange() {
	watch('./src/scss/**/*.scss', compileSass);
	watch('./src/js/**/*.js', compileJS);
	watch('./**/*.php').on('change', browsersync.reload);
	watch('./**/*.twig').on('change', browsersync.reload);
}

function startBrowserSync(cb) {
	browsersync.init({
		proxy: 'localhost/portfolio',
		notify: false,
	});
	cb();
}

exports.default = compileSass;
exports.watch = compileOnChange;
exports.js = compileJS;
exports.sass = compileSass;
exports.dev = series(startBrowserSync, compileOnChange);