import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import order from "../contents/order.json"
import SEO from "../components/SEO"

export default function ContentPage({ data }) {
  var post = data.markdownRemark
  // the map page
  if (data.markdownRemark.frontmatter.title === "NISER Detailed Map") {
    post.html =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.1711091420616!2d85.68115061491841!3d20.168599886470606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19aea875ebf9fd%3A0x44948bdac82e20ba!2sNISER%20JATNI%20MAIN%20GATE!5e0!3m2!1sen!2sin!4v1606559679721!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  }
  const headings = order.map(x => {
    return {
      heading: x,
      path:
        "/" + x.replaceAll(" ", "-").replaceAll("’", "").toLowerCase() + "/",
    }
  })
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="article-container">
        <div className="container-fluid">
          <div className="row">
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
        </div>
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
