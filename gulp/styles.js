let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let moduleImporter = require("sass-module-importer");

gulp.task("styles", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass({ importer: moduleImporter(), outputStyle: "compressed" }))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(gulp.dest("src/css"));
});
