import React from "react"
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
  `).allMarkdownRemark.edges.filter(
    data_point => data_point.node.frontmatter.title !== ""
  )
  const fuse = new Fuse(data, {
    isCaseSensitive: false,
    includeMatches: true,
    shouldSort: true,
    findAllMatches: false,
    ignoreLocation: true,
    includeScore: false,
    threshold: 0.3,
    keys: ["node.frontmatter.title", "node.html"],
  })
  const outputs = fuse.search("'" + props.query)
  return (
    <div className="container">
      {
        // {data.map(function (data_point, index) {
        //   return <pre>{JSON.stringify(data_point)}</pre>
        // })}
      }
      {outputs.map(function (output, index) {
        return (
          <SearchResultCard output={output.item.node} index={output.refIndex} />
        )
      })}
    </div>
  )
}
