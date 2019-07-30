var gulp          = require('gulp'),
    sass          = require('gulp-sass'),           // *gulp-sass (для транспиляции sass -> css)
    browserSync   = require('browser-sync'),        // *browser-sync (для автообновления страниц)
    concat        = require('gulp-concat'),         // *gulp-concat (для конкатенации файлов)
    uglify        = require('gulp-uglify'),         // *gulp-uglify (для минификации js)
    cleanCss      = require('gulp-clean-css'),      // *gulp-clean-css (для минификации css)
    autoprefixer  = require('gulp-autoprefixer'),   // *gulp-autoprefixer (для расстановки префиксов)
    imagemin      = require('gulp-imagemin'),       // *gulp-imagemin (для минификации изображений)
    del           = require('del');                 // *del (для удаления файлов и папок)

    
var PATHS = {
  src: 'src',
  dist: 'dist'
}


// add browser-sync
// add clean 'dist'


/**
    * HTML
    * 1. создание таска 'html'
    * 2. исходная директория (all files.html)
    * 3. конечная директория
 */

gulp.task('html', function() {
  return gulp.src(`${PATHS.src}/*.html`)
    .pipe(gulp.dest(`${PATHS.dist}`))
})


/**
    * STYLES
    * 1. создание таска 'styles'
    * 2. исходная директория (all files.sass)
    * 3. конкатенация files.sass -> style.min.sass
    * 4. транспиляция style.min.sass -> style.min.css
    * 5. расстановка префиксов в style.min.css
    * 6. минификация файла style.min.css
    * 7. выгрузка файла style.min.css в 'dist/css'
 */

gulp.task('styles', function() {
  return gulp.src(`${PATHS.src}/styles/**/*.sass`)
    .pipe(concat('style.min.sass'))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      cascade: false
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest(`${PATHS.dist}/css`))
})


/**
    * SCRIPTS
    * 1. создание таска 'scripts'
    * 2. исходная директория (all files.js)
    * 3. конкатенация files.js -> script.min.js
    * 4. минификация файла script.min.js
    * 5. выгрузка файла script.min.js в 'dist/js'
 */

 gulp.task('scripts', function() {
   return gulp.src([
      //  'node_modules/'
      `${PATHS.src}/scripts/*.js`,
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${PATHS.dist}/js`))
 })


/**
   * IMAGES
   * 1. создание таска 'images'
   * 2. исходная директория (all images)
   * 3. минификация all images
   * 4. выгрузка all images в 'dist/img'
*/

gulp.task('images', function() {
  return gulp.src(`${PATHS.src}/images/**/*.{png,jpg,jpeg,gif}`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${PATHS.dist}/img`))
})


/**
   * WATCH
   * наблюдение за изменениями в файлах
*/

gulp.task('watch', function() {
  gulp.watch('src/*.html', gulp.parallel('html'));
  // gulp.watch('src/styles/**/*.sass', gulp.parallel('styles'));
  gulp.watch('src/scripts/**/*.sass', gulp.parallel('scripts'));
  gulp.watch('src/images/**/*', gulp.parallel('images'));
})


/**
   * DEFAULT
   * запуск тасков по умолчанию 
*/

gulp.task('default', gulp.parallel('html', 'styles', 'scripts', 'images', 'watch'))
