module.exports = {

  siteMetadata: {
    title: `Student Affairs Website NISER`,
    description: `This is the best student affairs website of any college!`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // The path to src folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // This is for the content pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      },
    },
    `gatsby-transformer-remark`,
  ],

}
