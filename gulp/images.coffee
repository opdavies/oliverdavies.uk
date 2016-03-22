g = require 'gulp'

g.task 'images', -> g.start 'meetup-thumbnails', 'minify-images'

g.task 'meetup-thumbnails', ->
    g.src 'source/assets/images/meetups/originals/*'
        .pipe g.p.imageResize
            height: 50
        .pipe g.dest 'source/assets/images/meetups/thumbnails'

g.task 'minify-images', ->
    g.src 'source/assets/images/*'
        .pipe g.p.imagemin()
        .pipe g.dest 'source/assets/images'
