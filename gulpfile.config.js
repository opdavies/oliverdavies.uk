module.exports = function (plugins) {
    return {
        sass: {
            sourceDir: "assets/sass",
            pattern: "/**/*.sass",
            outputDir: "source/assets/css"
        },
        fonts: {
            outputDir: "source/assets/fonts"
        },
        js: {
            sourceDir: "assets/js",
            pattern: "/**/*.js",
            outputDir: "source/assets/js"
        },
        production: !!plugins.util.env.production
    }
}
