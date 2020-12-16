import React from "react"
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
  // TODO: get this (query) from input field
  //     - Add a text input
  //     - hook or something to make it work realtime, it will be fast enough because of the small amount of data
  const query = "student"
  const outputs = fuse.search(query)
  return (
    <Layout>
      <div className="container">
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
