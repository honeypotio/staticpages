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
    imageoptimizer:
      smushit: false
      path: 'images'
    sass:
      options:
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    digest:
      referenceFiles: /\.html|\.css|index|for_employers|for_developers_old$/
      # diges does not work with files without file extension
      #referenceFiles: /\.html|\.css|^[^.]+$/
    static:
      processors: [
        require('html-brunch-static') {
          handlebars:
            enableProcessor:
              fileMatch: /\.static\.(hbs|handlebars)$/
              fileTransform: (f) -> f.replace(/\.static\.\w+$/, '')
        }
      ]
