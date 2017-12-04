var gulp = require('gulp');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
