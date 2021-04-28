import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "../layouts/background-image"
import SocialMedia from "./social-media"
import { rhythm } from "../../utils/typography"

const FooterStyle = styled.div`
  .backgroundImageContainer {
    padding: ${rhythm(1 / 2)};
    height: 50vh;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .copyright {
    flex: 1;
    text-align: right;
  }

  @media (min-width: 992px) {
    .backgroundImageContainer {
      height: 33vh;
    }
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

  return (
    <FooterStyle>
      <BackgroundImage
        image={footer.image}
        alt={footer.image.description}
        content={
          <div className="backgroundImageContainer">
            <SocialMedia />
            <div className="copyright">
              {new Date().getFullYear()}
              {data.contentfulFooter.text}
            </div>
          </div>
        }
      ></BackgroundImage>
    </FooterStyle>
  )
}

export default Footer
