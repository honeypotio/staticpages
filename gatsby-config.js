/* global module */
console.log(`***\n\n URL BASE: ${process.env.URL_BASE} \n\n ***`)
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
};
