import React from "react"

// Import global styles
import "../styles/global.scss"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import NavigationBar from "./NavigationBar"

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/white_logo.png" }) {
        childImageSharp {
          fixed(width: 1400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      markdownRemark(fields: { slug: { eq: "/contact-us/" } }) {
        html
      }
    }
  `)
  return (
    <main>
      <NavigationBar />
      <div className="background-logo">
        <Img fixed={data.file.childImageSharp.fixed} alt="NISER logo" />
      </div>
      {props.children}
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3>Contact Us:</h3>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <p>© 2020 National Institute of Science Education and Research</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
