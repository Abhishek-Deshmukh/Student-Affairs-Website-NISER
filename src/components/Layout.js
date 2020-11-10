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
    }
  `)
  return (
    <main>
      <NavigationBar />
      <div className="background-logo">
        <Img fixed={data.file.childImageSharp.fixed} alt="NISER logo" />
      </div>
      <header>
        <div className="center">
          <h1>National Institute of Science Education and Research</h1>
          <h2>Student Affairs</h2>
        </div>
      </header>
      {props.children}
    </main>
  )
}
