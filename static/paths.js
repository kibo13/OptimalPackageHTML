const src = 'src/';
const dist = 'dist/';

const panini = {
  root: src,
  layouts: src + 'layouts/',
  partials: src + 'partials/',
  helpers: src + 'helpers/',
  data: src + 'data/'
}

const dev = {
  templates: src + '*.html',
  styles: src + 'styles/*.sass',
  scripts: src + 'scripts/**/*.js',
  images: src + 'assets/images/**/*.{png,jpg,jpeg,webp}',
  icons: src + 'assets/icons/**/*.{png,ico,svg}',
  fonts: src + 'assets/fonts/**/*',
};

const watch = {
  templates: src + '**/*.html',
  styles: src + 'styles/**/*.sass',
  scripts: src + 'scripts/**/*.js',
  images: src + 'assets/images/**/*.{png,jpg,jpeg,webp}',
  icons: src + 'assets/icons/**/*.{png,ico,svg}'
};

const build = {
  templates: dist,
  styles: dist,
  scripts: dist,
  images: dist + 'assets/images',
  icons: dist + 'assets/icons',
  fonts: dist + 'assets/fonts',
};

exports.src = src;
exports.dist = dist;
exports.panini = panini;
exports.dev = dev;
exports.watch = watch;
exports.build = build;
