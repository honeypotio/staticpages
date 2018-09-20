/* global module */
module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: 'gatsby-plugin-sass', 
      options: {
        includePaths: [
          './node_modules/bootstrap-sass/assets/stylesheets',
          './app/assets',
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
}
