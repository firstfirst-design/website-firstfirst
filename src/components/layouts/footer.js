import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "../layouts/background-image"

const FooterStyle = styled.div`
  height: 33vh;
  display: flex;
  justify-content: space-between;
  color: white;
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
          socialMedia {
            childMarkdownRemark {
              html
            }
          }
          text
        }
      }
    `
  )

  const footer = data.contentfulFooter

  return (
    <BackgroundImage image={footer.Image} alt={footer.image.description}>
      <FooterStyle>
        <div
          className="links"
          dangerouslySetInnerHTML={{
            __html: footer.socialMedia.childMarkdownRemark.html,
          }}
        />

        <div className="copyright">
          {new Date().getFullYear()}
          {footer.text}
        </div>
      </FooterStyle>
    </BackgroundImage>
  )
}

export default Footer
