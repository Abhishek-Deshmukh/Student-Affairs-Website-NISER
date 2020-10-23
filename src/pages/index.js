import React from "react"
import { Link } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <Layout>
      <h1>Welcome to {title}</h1>
      <p>{description}</p>
      <p> Link to the <Link to="/about/">about page</Link>.</p>
    </Layout>
  )
}
