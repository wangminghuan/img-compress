var gulp=require('gulp');
var path=require('path');
var tinypng = require('gulp-tinypng-compress');
console.log("开始压缩图片....");
//压缩资源
gulp.task('compress-img', function() {
  return gulp.src(["*.{png,jpg,jpeg}","img/**/*.{png,jpg,jpeg}","image/**/*.{png,jpg,jpeg}","images/**/*.{png,jpg,jpeg}","imgs/**/*.{png,jpg,jpeg}"])
  .pipe(tinypng({
      key: '',//填入自己的tinypng KEY，每月限制500张
      sigFile: '',
      log: true
    }))
  .pipe(gulp.dest(path.resolve(__dirname,"./publish")))
});