import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function ContentPage({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="article-container container-fluid row">
        <aside className="col-2">
          <input type="text" placeholder="Search"/>
        </aside>
        <div className="col-9">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
