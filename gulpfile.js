const { src, dest, parallel, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')
const gcmq = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create()
const del = require('del')
const path = require('./static/paths')

function serve() {
  browserSync.init({
    server: { baseDir: path.dist },
    notify: false,
  })
}

function template() {
  return src(path.dev.template)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.template))
    .pipe(browserSync.stream())
}

function styles() {
  return src(path.dev.styles)
    .pipe(sass({ includePaths: ['node_modules'] }))
    .pipe(concat('main.min.css'))
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(cleanCSS())
    .pipe(dest(path.build.styles))
    .pipe(browserSync.stream())
}

function scripts() {
  return src(path.dev.scripts)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest(path.build.scripts))
    .pipe(browserSync.stream())
}

function images() {
  return src(path.dev.images)
    .pipe(imagemin())
    .pipe(dest(path.build.images))
    .pipe(browserSync.stream())
}

function fonts() {
  return src(path.dev.fonts)
    .pipe(dest(path.build.fonts))
}

function watching() {
  watch(path.watch.template, template)
  watch(path.watch.styles, styles)
  watch(path.watch.scripts, scripts)
  watch(path.watch.images, images)
}

function clean() {
  return del(path.dist)
}

const files = parallel(template, styles, scripts, images, fonts)

exports.build = series(clean, files)
exports.serve = series(clean, files, serve, watching)