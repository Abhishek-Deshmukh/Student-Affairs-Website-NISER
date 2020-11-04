import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function ContentPage({ data }) {
  const post = data.markdownRemark
  const headings = data.allMarkdownRemark.edges
    .map(x => {
      return {
        path: x.node.fields.slug,
        heading: x.node.fields.slug
          .toString()
          .slice(1, -1)
          .replace("-", " ")
          .replace("-", " ")
          .replace("-", " ")
          .toUpperCase(),
      }
    })
    .slice(0, -1)
  return (
    <Layout>
      <div className="article-container container-fluid row">
        <aside className="col-2">
          <input type="text" placeholder="Search" />
          <ul>
            {headings.map(heading => {
              if (
                heading.heading.toUpperCase() ===
                post.frontmatter.title
                  .toUpperCase()
                  .replace("-", " ")
                  .replace("-", " ")
                  .replace("-", " ")
              ) {
                return <li style={{opacity:0.5}}>{heading.heading}</li>
              }
              return (
                <li>
                  <Link to={heading.path}>{heading.heading}</Link>
                </li>
              )
            })}
          </ul>
        </aside>
        <article className="col-9">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
