import React from "react"
import { Link } from "gatsby"

export default function SearchResultCard(props) {
  return (
    <div className="no-link">
      <Link to={props.output.fields.slug}>
        <div className="search-result-card">
          <h3>{props.output.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: props.output.html }} />
        </div>
      </Link>
    </div>
  )
}
