module.exports =
  files:
    javascripts:
      joinTo:
        'vendor.js': /^(?!app)/,
        'app.js': /^app/

    stylesheets:
      joinTo: 'app.css'
  plugins:
    babel:
      presets: ['es2015']
    static:
      processors: [
        require('html-brunch-static') {
          handlebars: {
            enableProcessor: true
          }
        }
      ]
