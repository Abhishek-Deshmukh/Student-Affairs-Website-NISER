import React from "react"

// Import global styles
import "../styles/global.scss"

export default function Layout(props) {
  return (
    <main>{props.children}</main>
  )
}
