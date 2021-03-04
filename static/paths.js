const src = 'src';
const dist = 'dist';

const dev = {
  templates: src + '/*.html',
  styles: src + '/*.sass',
  scripts: src + '/**/*.js',
  images: src + '/assets/images/**/*.{png,jpg,jpeg,webp}',
  icons: src + '/assets/icons/**/*.{png,ico,svg}',
  fonts: src + '/assets/fonts/**/*',
};

const watch = {
  templates: src + '/**/*.html',
  styles: src + '/**/*.sass',
  scripts: src + '/**/*.js',
  images: src + '/assets/images/**/*.{png,jpg,jpeg,webp}',
  icons: src + '/assets/icons/**/*.{png,ico,svg}'
};

const build = {
  templates: dist,
  styles: dist + '/styles',
  scripts: dist + '/scripts',
  images: dist + '/assets/images',
  icons: dist + '/assets/icons',
  fonts: dist + '/assets/fonts',
};

exports.src = src;
exports.dist = dist;
exports.dev = dev;
exports.watch = watch;
exports.build = build;
