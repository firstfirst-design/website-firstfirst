import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "../layouts/background-image"
import SocialMedia from "./social-media"
import { rhythm } from "../../utils/typography"

const FooterStyle = styled.div`
  height: 50vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .topContainer {
    display: flex;
    justify-content: space-between;
  }

  .bottomContainer {
    text-align: center;
  }

  .logo {
    width: 5rem;
    filter: invert(8%) sepia(100%) saturate(7209%) hue-rotate(248deg)
      brightness(94%) contrast(143%);
  }

  .logo:hover {
    filter: invert(11%) sepia(99%) saturate(7436%) hue-rotate(360deg)
      brightness(91%) contrast(122%);
  }

  @media (min-width: 992px) {
    height: 30vh;
    padding: ${rhythm(1)};
  }
`

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query FooterQuery {
        contentfulFooter {
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            description
          }
          text
        }
        contentfulAsset(title: { eq: "first-first-design-logo" }) {
          title
          file {
            url
          }
          description
        }
      }
    `
  )

  const footer = data.contentfulFooter
  const logo = data.contentfulAsset

  return (
    <BackgroundImage
      image={footer.image}
      alt={footer.image.description}
      content={
        <FooterStyle>
          <div className="topContainer">
            <SocialMedia />
            <Link to="/">
              <img
                src={`http:${logo.file.url}`}
                alt={logo.description}
                className="logo"
              />
            </Link>
          </div>
          <div className="bottomContainer">
            {new Date().getFullYear()}
            {data.contentfulFooter.text}
          </div>
        </FooterStyle>
      }
    >
      <div>Hello</div>
    </BackgroundImage>
  )
}

export default Footer
