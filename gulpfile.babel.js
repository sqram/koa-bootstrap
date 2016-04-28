'use strict';

import gulp from 'gulp'
import stylus from 'gulp-stylus'              // stylus preprocessor
import livereload from 'gulp-livereload'      // live reload
import cleancss from 'gulp-clean-css'         // minifi css
import webpackstream from 'webpack-stream'    // gulp webpack
import gutil from 'gulp-util'                 // gulp util
import nodemon from 'gulp-nodemon'            // restart nodemon from gulp
import babelconfig from './webpack.config'    // webpack config
import uglify from 'gulp-uglify'
var prod = gutil.env.type == 'production';


// js

gulp.task('js', () => {
  gulp.src(['src/js/index.js'], { base: 'src' })
    .pipe(webpackstream(babelconfig))
    .pipe(prod ? uglify() : gutil.noop())
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload())
})



gulp.task('nodemon', () => {
  nodemon({
    script: './server/index.js'
    , ext: 'html js'
    , ignore: [ ".git", "src/**/*", "public/**/*", "node_modules/**/node_modules"]
  })
  .on('restart', () => {
    gutil.log(gutil.colors.cyan('--> nodemon restarted'))
    // Give it 1 sec to make sure server's done restarting
    setTimeout(() => {
      livereload.reload()
      console.log('reloaded')
    }, 1000)
  })

})


// Process stylus

gulp.task('stylus', () => {
  gulp.src(['./src/css/**/*.styl'], { base: 'src' })
    .pipe(stylus())
    .pipe(prod ? cleancss() : gutil.noop())
    .pipe(gulp.dest('./public'))
    .pipe(livereload())
});


// For the Watch!!

gulp.task('watch', () => {
  if (!prod) {
    livereload({ start: true })
    livereload.listen()
  }
  gulp.watch('./src/**/*.js', ['js'])
  gulp.watch('./src/css/**/*.styl', ['stylus'])
});


gulp.task('dev', ['watch', 'nodemon'])

// call with gulp build --type production
gulp.task('build', ['js', 'stylus'])