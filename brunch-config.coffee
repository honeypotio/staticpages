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
      presets: [
        [
          'env', {
            'targets':
              'browsers': ['last 2 versions', 'safari >= 8']
          }
        ],
        'react'
      ]
    imageoptimizer:
      smushit: true
      path: 'images'
    sass:
      options:
        includePaths: [
          'node_modules',
          'node_modules/bootstrap-sass/assets/stylesheets',
          'node_modules/jquery-cookiebar'
        ]
    postcss:
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    digest:
      referenceFiles: /\.html|\.css|for_employers|404|join|join-de|how_it_works|terms_of_service|legal_notice|privacy|500|faq|sign_up|new|about|company_invite_request_received$/
      # digest does not work with files without file extension
      #referenceFiles: /\.html|\.css|^[^.]+$/
    envstatic:
      prefix: '$PROCESS_ENV_'
      pattern: /\$PROCESS_ENV_(\w+)/gi
      variables:
        HOST: process.env.HOST
        APP_HOST: process.env.APP_HOST || 'http://localhost:5000'
        API_HOST: process.env.API_HOST || 'http://localhost:5000'
        COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || 'localhost'
        URL_BASE: process.env.URL_BASE
    static:
      processors: [
        require('html-brunch-static') {
          defaultContext:
            url_base: process.env.URL_BASE
            app_host: process.env.APP_HOST || 'http://localhost:5000'
            ga_id: process.env.GA_ID
            gtm_id: process.env.GTM_ID
            optimizely_id: process.env.OPTIMIZELY_ID
            rollbar_token: process.env.ROLLBAR_TOKEN
            date_year: new Date().getFullYear()
          handlebars:
            enableProcessor:
              fileMatch: /\.static\.(hbs|handlebars)$/
              fileTransform: (f) -> f.replace(/\.static\.\w+$/, '')
        }
      ]
  server:
    path: 'app.js'
    port: 4000
