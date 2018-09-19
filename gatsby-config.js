/* global module */
module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'any',
      }
    }
  ]
}
