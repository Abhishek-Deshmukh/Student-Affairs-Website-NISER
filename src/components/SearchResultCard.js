import React from "react"
import { Link } from "gatsby"

export default function SearchResultCard(props) {
  // TODO: make this into a good card
  //     - a card heading
  //     - a bunch of characters before and after the indexRef
  //     - highlight the search query
  //     - card border or something
  //     - style the damn thing
  return (
    <div>
      <Link to={props.output.fields.slug}>
        <h1>{props.output.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.output.html }}
        />
      </Link>
    </div>
  )
}
