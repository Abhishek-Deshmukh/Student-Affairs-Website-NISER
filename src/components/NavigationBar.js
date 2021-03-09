import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import useWindowDimensions from "./useWindowDimensions"

export default function NavigationBar(props) {
  const { height, width } = useWindowDimensions()
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/white_logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  var initial_nav_open = true
  if (width < 1256) {
    initial_nav_open = false
  }
  const [nav_open, change_nav_open] = React.useState(initial_nav_open)
  const toggle = () => {
    change_nav_open(!nav_open)
  }
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Announcements",
      link: "/announcements/",
    },
    {
      name: "Clubs",
      link: "/club-information/",
    },
    {
      name: "Achievements",
      link: "/students-achievements/",
    },
    {
      name: "Contact Us",
      link: "/contact-us/",
    },
  ]
  return (
    <nav>
    <div class="nav-big-container">
      <Link to="/">
        <Img fixed={logo.file.childImageSharp.fixed} alt="NISER logo" />
      </Link>
      <Link to="/">
        <div className="big-title">
          <h1>Student Affairs</h1>
          <p> National Institute of Science Education and Research </p>
        </div>
      </Link>
      {width < 1256 && (
        <div className="ham">
          <input type="checkbox" onClick={toggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {nav_open && (
        <ul>
          {links.map(link => {
            return (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>

      <Link to="/">
        <div className="small-title">
          <h1>Student Affairs</h1>
          <p> National Institute of Science Education and Research </p>
        </div>
      </Link>
    </nav>
  )
}
