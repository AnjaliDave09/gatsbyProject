/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {

  /* Your site config here */
  plugins: [
    'gatsby-plugin-antd',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  //   {
  //     resolve: `gatsby-source-wordpress`,
  //     options: {
  //         // Specify the URL of the WordPress source
  //         baseUrl: `localhost:8888/wordpress`,
  //         protocol: `http`,
  //         // Indicates if a site is hosted on WordPress.com
  //         hostingWPCOM: false,
  //         // Specify which URL structures to fetch
  //         includedRoutes: [
  //           '**/posts',
  //           '**/tags',
  //           '**/categories'
  //         ]
  //     }
  // }
  ],
}
