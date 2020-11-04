import React from "react"
// import { Link } from "gatsby"
import useWindowDimensions from "./useWindowDimensions"

export default function IndexCard(props) {

  var style_class = "index-card col-12 col-sm-12 col-md-4 col-lg-3"
  const {height, width} = useWindowDimensions();
  var num_cards_row = 1 + 2*(width >= 768) + (width >= 992);
  if (props.index % num_cards_row !== (num_cards_row - 1)) {
    style_class += " border-right"
  }

  return (
    <div className={style_class}>
      <div className="center">
        <p>Image here</p>
        <h2>{props.context.title}</h2>
        <a href={props.context.link} className="button">Checkout</a>
      </div>
    </div>
  )
}
