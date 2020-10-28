import React from "react"
import { Link } from "gatsby"

export default function IndexCard(props) {
  var style_class = "index-card col-sm-6 col-md-4 col-lg-3"
  if (props.index % 4 !== 3) {
    style_class += " border-right"
  }
  return (
    <div className={style_class}>
      <div className="center">
        <p>Image here</p>
        <h2>{props.context.title}</h2>
        <p>{props.context.description}</p>
        <a href="#" className="button">Checkout</a>
      </div>
    </div>
  )
}
