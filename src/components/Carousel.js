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
      a: file(relativePath: { eq: "contents/images/image20.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      b: file(relativePath: { eq: "contents/images/image21.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      c: file(relativePath: { eq: "contents/images/image22.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      d: file(relativePath: { eq: "contents/images/image47.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      e: file(relativePath: { eq: "contents/images/image32.jpg" }) {
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
