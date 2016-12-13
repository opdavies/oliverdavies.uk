module.exports = function (plugins) {
    var config = {
        autoprefixer: {
            browsers: ["last 2 versions", "> 5%"]
        },
        bowerDir: 'vendor/bower_components',
        fontsDir: 'source/assets/fonts',
        js: {
            sourceDir: 'assets/js',
            outputDir: 'source/assets/js',
            pattern: '/**/*.js'
        },
        production: !!plugins.util.env.production,
        sass: {
            sourceDir: 'assets/sass',
            pattern: '/**/*.sass',
            outputDir: 'source/assets/css'
        }
    }

    return config;
}
