module.exports =
  conventions:
    assets: /^(public)/,
    ignored: [
      /^(node_modules\/bootstrap\/)(?!.*min.(js|css)$)/,
      /^(node_modules\/jquery\/)(?!.*min.js)/
    ]
  files:
    javascripts:
      joinTo:
        'vendor.js': /^(node_modules)/,
        'app.js': /^app/
      order:
        before: [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/bootstrap/dist/js/bootstrap.js"
        ]
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
      referenceFiles: /\.html|\.css|for_employers|404|how_does_it_work|terms_of_service$/
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
