const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.disableNotifications()
.options({
    processCssUrls: false,
})
.js('assets/js/app.js', 'bundle/js/app.min.js')
.sass('assets/sass/app.scss', 'bundle/css/app.min.css');
