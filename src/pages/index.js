import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import IndexCard from "../components/IndexCard"
import SEO from "../components/SEO"

export default function Home() {
  // const images =
  const images = useStaticQuery(graphql`
    {
      gallery: file(relativePath: { eq: "assets/icons/gallery.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nearby: file(relativePath: { eq: "assets/icons/nearby.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      contact: file(relativePath: { eq: "assets/icons/contact-us.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      events: file(relativePath: { eq: "assets/icons/events.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      scholarship: file(relativePath: { eq: "assets/icons/scholarship.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      niser_map: file(relativePath: { eq: "assets/icons/niser-map.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      students_of_niser: file(
        relativePath: { eq: "assets/icons/students-of-niser.png" }
      ) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      clubs: file(relativePath: { eq: "assets/icons/clubs.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      announcements: file(
        relativePath: { eq: "assets/icons/announcements.png" }
      ) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      forms: file(relativePath: { eq: "assets/icons/forms.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const sections = [
    {
      title: "Students of NISER",
      link: "/students-of-niser/",
      image: images.students_of_niser,
    },
    {
      title: "DOSA",
      link: "/dosa/",
    },
    {
      title: "Announcements",
      link: "/announcements/",
      image: images.announcements,
    },
    {
      title: "NISER map",
      link: "/niser-detailed-map/",
      image: images.niser_map,
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
      image: images.scholarship,
    },
    {
      title: "Club Information",
      link: "/club-information/",
      image: images.clubs,
    },
    {
      title: "Event (year-wise)",
      link: "/event-(year-wise)/",
      image: images.events,
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
      image: images.nearby,
    },
    {
      title: "Gallery",
      link: "/gallery/",
      image: images.gallery,
    },
    {
      title: "Students Achievements",
      link: "/students-achievements/",
    },
    {
      title: "Forms for Students",
      link: "https://www.niser.ac.in/content/student-forms",
      image: images.forms,
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
    // {
    //   title: "Contact Us",
    //   link: "/contact-us/",
    //   image: images.contact,
    // },
  ]
  return (
    <Layout>
      <SEO home={true} />
      <div className="container-fluid">
        <div className="row">
          {sections.map((section, index) => {
            return <IndexCard key={index} context={section} index={index} />
          })}
        </div>
      </div>
    </Layout>
  )
}
