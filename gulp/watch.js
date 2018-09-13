let gulp = require("gulp");
let watch = require("gulp-watch");
let browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "src"
    }
  });
  watch("src/index.html", function() {
    browserSync.reload();
  });
  watch("src/scss/**/*.scss", function() {
    gulp.start("cssInject");
  });
  watch("src/scripts/**/*.js", function() {
    gulp.start("scriptsRefresh");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("src/css/main.css").pipe(browserSync.stream());
});
gulp.task("scriptsRefresh", ["scripts"], function() {
  browserSync.reload();
});
