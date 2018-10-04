/* global module */
module.exports = {
  siteMetadata: {},
  pathPrefix: process.env.URL_BASE,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass', 
      options: {
        includePaths: [
          './node_modules/bootstrap-sass/assets/stylesheets',
          './app/styles'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'any',
      }
    }
  ]
};
