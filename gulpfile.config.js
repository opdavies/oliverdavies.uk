module.exports = function (plugins) {
    return {
        sass: {
            autoprefixer: {
                browsers: ["last 2 versions", "> 5%"],
                cascade: false
            },
            sourceDir: "assets/sass",
            pattern: "/**/*.sass",
            purifyCss: [
                'source/**/*.html',
                'source/**/*.md',
                'source/**/*.twig'
            ],
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
