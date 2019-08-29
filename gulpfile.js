const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

const sassOptions = {
	outputStyle: 'compressed'
};

function compileSass() {
	return src('./src/scss/**/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(rename('styles.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./static/css'));
}

function compileOnChange() {
	watch('./src/scss/**/*.scss', compileSass);
}

exports.default = compileSass;
exports.watch = compileOnChange;