require( "dotenv" ).config( {
  path: `.env.${process.env.NODE_ENV}`,
} )

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WooGatsby",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.GATSBY_GRAPHQL_URL
      }
    },
    'gatsby-plugin-postcss',
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
