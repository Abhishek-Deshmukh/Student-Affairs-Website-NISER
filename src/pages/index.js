import React from "react"

// import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"
import IndexCard from "../components/IndexCard"

export default function Home() {
  const sections = [
    {
      title: "Students of NISER",
      link: "/students-of-niser/",
    },
    {
      title: "DOSA",
      link: "/dosa/",
    },
    {
      title: "Announcements",
      link: "/announcements/",
    },
    {
      title: "NISER map",
      link: "/niser-detailed-map/",
    },
    {
      title: "Extra-Curricular Facilities",
      link: "/extra-curricular-facilities/",
    },
    {
      title: "Student's Gymkhana",
      link: "/students-gymkhana/",
    },
    {
      title: "Exam Scholarship Reward",
      link: "/exam-scholarship-reward/",
    },
    {
      title: "Club Information",
      link: "/club-information/",
    },
    {
      title: "Event (year-wise)",
      link: "/event-(year-wise)/",
    },
    {
      title: "Alumni",
      link: "/alumni/",
    },
    {
      title: "Campus Life",
      link: "/campus-life/",
    },
    {
      title: "Near by",
      link: "/nearby/",
    },
    {
      title: "Gallery",
      link: "/gallery/",
    },
    {
      title: "Students Achievements",
      link: "/students-achievements/",
    },
    {
      title: "Forms for Students",
      link: "/forms-for-students/",
    },
    {
      title: "Anti-Ragging",
      link: "/anti-ragging/",
    },
    {
      title: "Women's Cell",
      link: "/womens-cell/",
    },
    {
      title: "SC-ST-OBC CELL",
      link: "/sc-st-obc-cell/",
    },
    {
      title: "Counselling Cell for students",
      link: "/counselling-cell-for-students/",
    },
    {
      title: "Discipline",
      link: "/discipline/",
    },
    {
      title: "Contact Us",
      link: "/contact-us/",
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
