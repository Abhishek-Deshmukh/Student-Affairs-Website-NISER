import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, home }) => {
  const { pathname } = useLocation()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
          siteDescription: description
        }
      }
    }
  `)

  const {
    siteTitle,
    siteDescription,
    // siteUrl,
  } = data.site.siteMetadata

  // const siteLogo = data.file.publicURL

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    // image: `${siteUrl}${image || siteLogo}`,
    // url: `${siteUrl}${pathname}`,
  }

  let pageTitle
  if (title == null) {
    pageTitle = siteTitle
  } else {
    pageTitle = `${seo.title} | ${siteTitle}`
  }

  return (
    <Helmet title={pageTitle}>
      {
        // <link rel="canonical" href={seo.url} />
        // <meta name="image" content={seo.image} />
        //<meta property="og:url" content={seo.url} />
        //<meta property="og:image" content={seo.image} />
        //<meta name="twitter:card" content={home? "summary_large_image" : "summary"} />
        //<meta name="twitter:image" content={seo.image} />
      }
      <meta name="description" content={seo.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  home: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  home: false,
}
