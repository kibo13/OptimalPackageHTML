const { src, dest, parallel, series, watch } = require('gulp')
const concat = require('gulp-concat')
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const del = require('del')
const path = require('./static/paths')

function liveServer() {
  browserSync.init({
    server: { baseDir: path.dist },
    notify: false,
  })
}

function template() {
  return src(path.dev.template)
    .pipe(dest(path.build.template))
    .pipe(browserSync.stream())
}

function styles() {
  return src(path.dev.styles)
    .pipe(sass())
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(cleanCSS())
    .pipe(dest(path.build.styles))
    .pipe(browserSync.stream())
}

function scripts() {
  return src(path.dev.scripts)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest(path.build.scripts))
    .pipe(browserSync.stream())
}

function images() {
  return src(path.dev.images)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3
    }))
    .pipe(dest(path.build.images))
    .pipe(browserSync.stream())
}

function watching() {
  watch(path.watch.template, template)
  watch(path.watch.styles, styles)
  watch(path.watch.scripts, scripts)
  watch(path.watch.images, images)
}

function clean() {
  return del.sync(path.dist)
}

exports.clean = clean
exports.template = template
exports.styles = styles
exports.scripts = scripts
exports.images = images

exports.build = series(clean, template, styles, scripts, images)
exports.default = parallel(clean, template, styles, scripts, images, liveServer, watching)