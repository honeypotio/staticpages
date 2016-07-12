module.exports =
  files:
    javascripts:
      joinTo:
        'vendor.js': /^(?!app)/,
        'app.js': /^app/,
        'tests.js': /^tests/
    stylesheets:
      joinTo: 'app.css'
  npm:
    globals:
      $: 'jquery',
      jQuery: 'jquery'
  plugins:
    babel:
      presets: ['es2015', 'react']
    imageoptimizer:
      smushit: true
      path: 'images'
    sass:
      options:
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    digest:
      referenceFiles: /\.html|\.css|for_employers|404|how_does_it_work|terms_of_service|legal_notice|500|faq|sign_up|new$/
      # diges does not work with files without file extension
      #referenceFiles: /\.html|\.css|^[^.]+$/
    static:
      processors: [
        require('html-brunch-static') {
          defaultContext:
            url_base: process.env.URL_BASE
            app_url: process.env.APP_URL || 'http://localhost:3000'
            ga_id: process.env.GA_ID
            gtm_id: process.env.GTM_ID
            optimizely_id: process.env.OPTIMIZELY_ID
          handlebars:
            enableProcessor:
              fileMatch: /\.static\.(hbs|handlebars)$/
              fileTransform: (f) -> f.replace(/\.static\.\w+$/, '')
        }
      ]
