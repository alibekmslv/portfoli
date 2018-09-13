let gulp = require("gulp"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify"),
  browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task("deleteDistFolder", function() {
  return del("./dist");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
  let pathsToCopy = [
    "./src/**/*",
    "!./src/index.html",
    "!./src/css/**",
    "!./src/js/**",
    "!./src/scripts",
    "!./src/scripts/**",
    "!./src/scss",
    "!./src/scss/**"
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
  gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts"], function() {
  return gulp
    .src("./src/index.html")
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("build", ["deleteDistFolder", "copyGeneralFiles", "useminTrigger"]);
