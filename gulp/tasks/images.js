import gulp from "gulp";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
// import webp from "gulp-webp";

export default () => {
    return (
        gulp
            .src(path.images.src)
            .pipe(
                plumber({
                    errorHandler: notify.onError((error) => ({
                        title: "IMAGES",
                        message: error.message,
                    })),
                })
            )
            .pipe(newer(path.images.dest))
            // .pipe(webp())
            // .pipe(gulp.dest(path.images.dest))
            // .pipe(gulp.src(path.images.src))
            // .pipe(newer(path.images.dest))
            .pipe(
                imagemin({
                    verbose: true,
                })
            )
            .pipe(gulp.dest(path.images.dest))
    );
};
