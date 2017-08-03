var del = require('del');

module.exports = function (gulp, plugins, config) {
    del.sync('source/assets/{css,fonts,js}');
    del.sync('output_*/assets/{css,fonts,js}');
}
