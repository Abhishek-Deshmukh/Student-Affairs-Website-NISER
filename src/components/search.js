import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SearchResultCard from "../components/SearchResultCard"
import Fuse from "fuse.js"
import Layout from "../components/Layout"

export default function Search(props) {
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
    isCaseSensitive: false,
    includeMatches: true,
    shouldSort: true,
    findAllMatches: true,
    ignoreLocation: true,
    includeScore: false,
    keys: ["node.frontmatter.title", "node.html"],
  })
  const outputs = fuse.search("'" + props.query)
  return (
    <div className="container">
      {outputs.map(function (output, index) {
        return (
          <SearchResultCard output={output.item.node} index={output.refIndex} />
        )
      })}
    </div>
  )
}
