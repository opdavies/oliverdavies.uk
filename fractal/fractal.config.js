'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require("@frctl/mandelbrot");
const path = require("path");

fractal.set('project.title', 'oliverdavies.uk');

fractal.components.set('path', __dirname + '/src/components');
fractal.components.engine(require('@frctl/nunjucks'));
fractal.components.set('ext', '.njk');


fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.theme(
  mandelbrot({
    information: [
      {
        label: 'Built on',
        value: new Date(),
        type: 'time',
        format: (value) => {
          return value.toLocaleDateString('en');
        },
      },
    ],
    format: "yaml",
    skin: "black",
  })
);
