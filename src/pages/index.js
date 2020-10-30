import React from "react"

// import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"
import IndexCard from "../components/IndexCard"

export default function Home() {
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
      <div className="container-fluid row">
        {sections.map((section, index) => {
          return <IndexCard key={index} context={section} index={index} />
        })}
      </div>
    </Layout>
  )
}
