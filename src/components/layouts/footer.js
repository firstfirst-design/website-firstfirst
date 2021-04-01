import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "../layouts/background-image"

const FooterStyle = styled.div`
  height: 25vh;
  color: white;
`

const FooterContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
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
    <FooterStyle>
      <BackgroundImage
        image={footer.image}
        alt={footer.image.description}
        content={
          <FooterContentStyle>
            <div
              className="links"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulFooter.socialMedia.childMarkdownRemark.html,
              }}
            />

            <div className="copyright">
              {new Date().getFullYear()}
              {data.contentfulFooter.text}
            </div>
          </FooterContentStyle>
        }
      >
        <div>Hello</div>
      </BackgroundImage>
    </FooterStyle>
  )
}

export default Footer
