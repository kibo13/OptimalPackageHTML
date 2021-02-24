const src = 'src';
const dist = 'dist';

const dev = {
  template: src + '/*.html',
  styles: src + '/styles/main.sass',
  scripts: src + '/scripts/**/*.js',
  images: src + '/images/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
  fonts: src + '/fonts/**/*',
};

const watch = {
  template: src + '/**/*.html',
  styles: src + '/styles/**/*.sass',
  // scripts: [src + '/scripts/**/*.js', '!' + src + '/scripts/**/*.min.js'],
  scripts: src + '/scripts/**/*.js',
  images: src + '/images/**/*.{png,jpg,jpeg,gif,ico,svg,webp}',
};

const build = {
  template: dist,
  styles: dist + '/styles',
  scripts: dist + '/scripts',
  images: dist + '/images',
  fonts: dist + '/fonts',
};

exports.src = src;
exports.dist = dist;
exports.dev = dev;
exports.watch = watch;
exports.build = build;
