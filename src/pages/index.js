import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"

export default function Home() {
  // <h1>Welcome to {title}</h1>
  // <p>{description}</p>
  // <p> Link to the <Link to="/about/">about page</Link>.</p>
  // const { title, description } = useSiteMetadata()
  return (
    <Layout>
      <header>
        <div className="center">
          <h1>NISER</h1>
          <h2>Student Affairs</h2>
        </div>
      </header>
    </Layout>
  )
}
