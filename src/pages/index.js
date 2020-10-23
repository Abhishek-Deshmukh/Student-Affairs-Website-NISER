import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <h1>Welcome to {title}</h1>
      <p>{description}</p>
      <p> Link to the <Link to="/about/">about page</Link>.</p>
    </React.Fragment>
  )
}
