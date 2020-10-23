import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <h1>This is the about page.</h1>
      <p><Link to="/">Home</Link></p>
    </Layout>
  )
}
