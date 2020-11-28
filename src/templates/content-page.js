import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import order from "../contents/order.json"

export default function ContentPage({ data }) {
  const post = data.markdownRemark
  const headings = order.map(x => {
    return {
      heading: x,
      path: "/" + x.replaceAll(" ", "-").toLowerCase() + "/",
    }
  })
  return (
    <Layout>
      <div className="article-container container-fluid row">
        <aside className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
          <input type="text" placeholder="Search" />
          <ul>
            {headings.map(heading => {
              if (
                heading.heading.toUpperCase() ===
                post.frontmatter.title.toUpperCase().replaceAll("-", " ")
              ) {
                return <li style={{ opacity: 0.5 }}>{heading.heading}</li>
              }
              return (
                <li>
                  <Link to={heading.path}>{heading.heading}</Link>
                </li>
              )
            })}
          </ul>
        </aside>
        <article className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
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
