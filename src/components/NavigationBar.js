import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useWindowDimensions from "./useWindowDimensions"

export default function NavigationBar(props) {
  const { height, width } = useWindowDimensions()
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/white_logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  var initial_nav_open = true;
  if (width < 768) {
    initial_nav_open = false;
  }
  const [nav_open, change_nav_open] = React.useState(initial_nav_open)
  const toggle = () => {
    change_nav_open(!nav_open)
  }
  const links = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
  ]
  return (
    <nav>
      <Img fixed={logo.file.childImageSharp.fixed} alt="NISER logo" />
      {width < 768 && (
        <div className="ham">
          <input type="checkbox" onClick={toggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    {
      nav_open &&
        <ul>
          {links.map(link => {
            return (
              <li  key={link.name}>
                <a href="lmao">{link.name}</a>
              </li>
            )
          })}
        </ul>
    }
    </nav>
  )
}
