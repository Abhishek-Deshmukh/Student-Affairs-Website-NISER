import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fuse from "fuse.js"
import SearchResultCard from "../components/SearchResultCard"

import Layout from "../components/Layout"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `).allMarkdownRemark.edges
  const fuse = new Fuse(data, {
    includeScore: false,
    keys: ["node.frontmatter.title", "node.html"],
  })
  const [query, setQuery] = useState("")
  const handleQueryChange = e => {
    setQuery(e.currentTarget.value)
  }
  const outputs = fuse.search(query)
  return (
    <Layout>
      <div className="container">
        <input
          type="text"
          placeholder="Search"
          className="search-input-box"
          onChange={handleQueryChange}
        />
        {outputs.map(function (output, index) {
          return (
            <div>
              <SearchResultCard output={output.item.node} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
