module.exports = {
  folder: {
    tasks: 'tasks',
    src: 'assets',
    build: 'public',
    pug: 'assets/templates'
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    vendorJs: 'vendor.js',
    vendorJsMin: 'vendor.js',
    mainScss: 'style.scss',
    mainScssMin: 'styles.css',
    vendorScss: 'vendor.scss',
    vendorScssMin: 'vendor.css',
  },
  task: {
    templates: 'templates',
    esLint: 'es-lint',
    buildCustomJs: 'build-custom-js',
    buildJsVendors: 'build-js-vendors',
    buildSass: 'build-sass',
    buildSassFiles: 'compile-sass-files',
    buildStylesVendors: 'build-styles-vendors',
    cleanBuild: 'clean-build',
    copyFolders: 'copy-folders',
    copyFoldersProduction: 'copy-folders-production',
    browserSync: 'browser-sync-server',
    watch: 'watch',
  },
  autoprefixer: {
    versions: 'last 4 versions'
  },
  getPathesForSassCompiling: function () {
    return {
      files: [],
      isGcmq: false
     };
  },
  getPathesToCopyForProduction: function() {
    return [
      './**/*',
      `!{${this.folder.src},${this.folder.src}/**}`,
      '!{bower,bower/**}',
      '!{node_modules,node_modules/**}',
      `!${this.folder.build}/css/**.map`,
      `!${this.folder.build}/images/info.txt`,
      '!.bowerrc',
      '!bower.json',
      '!.gitignore',
      '!gulpfile.js',
      '!LICENSE',
      '!package.json',
      `!${this.folder.prod}`,
      '!README.md',
      '!readme.txt',
      '!CONTRIBUTING.md',
      '!gulp-config.js',
      '!package-lock.json',
      '!{tasks,tasks/**}',
      '!{.git,.git/**}',
      '!{.history,.history/**}',
      '!.gitattributes',
      '!.travis.yml',
      '!.eslintrc',
      '!{tasks,tasks/**}'
    ];
  },
  getPathesToCopy: function() {
    return [
      `./${this.folder.src}/**`,
      `!{${this.folder.src}/images,${this.folder.src}/images/**}`,
      `!{${this.folder.src}/js,${this.folder.src}/js/**}`,
      `!{${this.folder.src}/scss,${this.folder.src}/scss/**}`,
      `!{${this.folder.src}/vendor_entries,${this.folder.src}/vendor_entries/**}`,
      `!{${this.folder.src}/templates,${this.folder.src}/templates/**}`
    ];
  }
};