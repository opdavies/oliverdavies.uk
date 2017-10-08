module.exports = function (plugins) {
    return {
        less: {
            autoprefixer: {
                browsers: ["last 2 versions", "> 5%"],
                cascade: false
            },
            sourceDir: "assets/less",
            pattern: "/**/*.less",
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
