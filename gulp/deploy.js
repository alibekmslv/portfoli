let gulp = require("gulp");
let rsync = require("gulp-rsync");

gulp.task("deploy", function() {
  return gulp.src("./dist/**").pipe(
    rsync({
      root: "dist/",
      hostname: "alibekup_psign@psign.ru",
      destination: "/home/a/alibekup/psign.ru/public_html"
    })
  );
});
