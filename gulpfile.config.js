module.exports = function (plugins) {
    return {
        autoprefixer: {
            browsers: ["last 2 versions", "> 5%"]
        },
        bower: {
            path: 'vendor/bower_components',
        },
        fonts: {
            destination: 'source/assets/fonts',
        },
        js: {
            source: 'assets/js',
            pattern: '/**/*.js',
            destination: 'source/assets/js',
        },
        production: !!plugins.util.env.production,
        sass: {
            source: 'assets/sass',
            pattern: '/**/*.sass',
            destination: 'source/assets/css',
        }
    }
}
