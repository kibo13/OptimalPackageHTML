var gulp          = require('gulp'),
    sass          = require('gulp-sass'),           // *gulp-sass (для транспиляции sass -> css)
    browserSync   = require('browser-sync'),        // *browser-sync (для автообновления страниц)
    concat        = require('gulp-concat'),         // *gulp-concat (для конкатенации файлов)
    uglify        = require('gulp-uglify'),         // *gulp-uglify (для минификации js)
    cleanCss      = require('gulp-clean-css'),      // *gulp-clean-css (для минификации css)
    autoprefixer  = require('gulp-autoprefixer'),   // *gulp-autoprefixer (для расстановки префиксов)
    rename        = require('gulp-rename'),         // *gulp-rename (для переименования файлов)
    imagemin      = require('gulp-imagemin'),       // *gulp-imagemin (для минификации изображений)
    del           = require('del');                 // *del (для удаления файлов и папок)


