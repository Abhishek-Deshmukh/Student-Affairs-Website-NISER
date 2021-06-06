import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
export default function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 6000,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    lazyLoad: true,
    pauseOnHover: true,
    cssEase: "ease-out",
  };

  const images = useStaticQuery(graphql`
    {
      a: file(relativePath: { eq: "contents/images/image6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      b: file(relativePath: { eq: "contents/images/image7.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      c: file(relativePath: { eq: "contents/images/image10.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      d: file(relativePath: { eq: "contents/images/image17.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      e: file(relativePath: { eq: "contents/images/image23.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

  return (
    <div className="slider-container">
    <div className="slider">
    <Slider {...settings}>
      <div className="image-container">
        <Img fluid={images.a.childImageSharp.fluid} />
      </div>
      <div className="image-container">
        <Img fluid={images.b.childImageSharp.fluid} />
      </div>
      <div className="image-container">
        <Img fluid={images.c.childImageSharp.fluid} />
      </div>
      <div className="image-container">
        <Img fluid={images.d.childImageSharp.fluid} />
      </div>
      <div className="image-container">
        <Img fluid={images.e.childImageSharp.fluid} />
      </div>
    </Slider>
    </div>
    </div>
  );
}
