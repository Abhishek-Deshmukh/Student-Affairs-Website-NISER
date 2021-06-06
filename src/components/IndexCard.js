import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function IndexCard(props) {
  return (
    <div className="index-card col-12 col-sm-12 col-md-4 col-lg-3">
      <div className="center">
        {props.context.image ? (
          <Img fixed={props.context.image.childImageSharp.fixed} />
        ) : (
          <p></p>
        )}
        <h2>{props.context.title}</h2>
        <Link to={props.context.link} className="button">
          Checkout
        </Link>
      </div>
    </div>
  )
}
