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
  ],
}
