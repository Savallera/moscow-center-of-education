const pathSrc = "./src";
const pathDest = "./dist";

export default {
    root: pathDest,

    html: {
        src: pathSrc + "/pages/*.html",
        watch: [pathSrc + "/pages/*.html", pathSrc + "/components/**/*.html"],
        dest: pathDest,
    },

    scss: {
        src: pathSrc + "/styles/*.scss",
        watch: [pathSrc + "/styles/*.scss", pathSrc + "/styles/**/*.scss", pathSrc + "/components/**/*.scss"],
        dest: pathDest + "/styles",
    },

    js: {
        src: pathSrc + "/scripts/*.js",
        watch: [pathSrc + "/scripts/*.js", pathSrc + "/scripts/**/*.js", pathSrc + "/components/**/*.js"],
        dest: pathDest + "/scripts",
    },

    images: {
        src: [pathSrc + "/images/*.{jpg,jpeg,png,webp,svg}", pathSrc + "/images/**/*.{jpg,jpeg,png,webp,svg}"],
        watch: [pathSrc + "/images/*.{jpg,jpeg,png,webp,svg}", pathSrc + "/images/**/*.{jpg,jpeg,png,webp,svg}"],
        dest: pathDest + "/images",
    },

    fonts: {
        src: [pathSrc + "/fonts/**/*"],
        watch: [pathSrc + "/fonts/**/*"],
        dest: pathDest + "/fonts",
    },

    documents: {
        src: [pathSrc + "/documents/**/*"],
        watch: [pathSrc + "/documents/**/*"],
        dest: pathDest + "/documents",
    },
};
