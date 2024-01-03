/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Belle Lim`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#e6e6e6",
        theme_color: "#e6e6e6",
        display: "standalone",
        icon: "src/images/wave.png",
        crossOrigin: `use-credentials`,
      },
  }]
};