import React from "react"

// import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"
import IndexCard from "../components/IndexCard"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home() {
  // TODO: get this info, and the images from the graphql api

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "niserLogo.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sections = [
    {
      title: "Students of NISER",
      description: "some description of the topic",
    },
    {
      title: "DOSA",
      description: "some description of the topic",
    },
    {
      title: "Announcements",
      description: "some description of the topic",
    },
    {
      title: "NISER map",
      description: "some description of the topic",
    },
    {
      title: "Extracurricular Facilities",
      description: "some description of the topic",
    },
    {
      title: "Student's Gymkhana",
      description: "some description of the topic",
    },
    {
      title: "Exam Scholarship Reward",
      description: "some description of the topic",
    },
  ]
  return (
    <Layout>
      <header>
        <div className="center">
          <h1>NISER</h1>
          <h2>Student Affairs</h2>
        </div>
      </header>
      <div className="container-fluid row">
        <Img fixed={data.file.childImageSharp.fixed} alt="Some description"/>
        {sections.map((section, index) => {
          return <IndexCard key={index} context={section} index={index} />
        })}
      </div>
    </Layout>
  )
}
