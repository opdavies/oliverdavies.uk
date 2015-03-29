##
## This file is only needed for Compass/Sass integration. If you are not using
## Compass, you may safely ignore or delete this file.
##
## If you'd like to learn more about Sass and Compass, see the sass/README.txt
## file for more information.
##

# Location of the theme's resources.
css_dir = "assets/css"
sass_dir = "assets/sass"
images_dir = "assets/images"
generated_images_dir = images_dir + "/generated"
javascripts_dir = "assets/js"

# Require any additional compass plugins installed on your system.
require 'sass-globbing'
require 'bootstrap-sass'

##
## You probably don't need to edit anything below this.
##

# You can select your preferred output style here (:expanded, :nested, :compact
# or :compressed).
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = true

# Conditionally enable line comments when in development mode.
line_comments = false
