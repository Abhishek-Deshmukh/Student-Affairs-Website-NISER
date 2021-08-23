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
              <h3>DOSA office</h3>
              <p>Admin Building, first floor</p>
              <p>Ph: 2494010</p>
              <p>
                <a href="mailto:dosa@niser.ac.in">dosa@niser.ac.in</a>
              </p>
              <p>© 2020 National Institute of Science Education and Research</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Student Affairs office</h3>
            <p>Academic building, Groud Floor</p>
            <p>Ph 2494042</p>
            <p>
              <a href="mailto: studentsgymkhana@niser.ac.in">studentsgymkhana@niser.ac.in</a>
            </p>
            <p>Gymkhana Office: SAC room no. 1</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
