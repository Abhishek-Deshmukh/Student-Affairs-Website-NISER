import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <h1>Welcome to {title}</h1>
      <p>{description}</p>
    </React.Fragment>
  )
}
