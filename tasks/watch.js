/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');

module.exports = function (options) {
  return () => {
    global.watch = true;
    gulp.watch(`./${options.src}/js/**/*`, gulp.series(options.tasks.buildCustomJs, options.tasks.esLint));

    gulp.watch(`${options.pug}/**/*.pug`, gulp.series(options.tasks.templates))
      .on('all', (event, path) => {
        global.emittyChangedFile = path;
      });

    gulp.watch(`./${options.src}/scss/**/*`, gulp.series(options.tasks.buildSass));

    gulp.watch([`./${options.dest}/**/*`, './*.html'])
      .on('change', options.browserSync.reload);
  };

};