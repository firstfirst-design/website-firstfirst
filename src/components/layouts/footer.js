import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

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

  const image = data.contentfulFooter.image
  const footerImage = getImage(image)

  return (
    <BgImage image={footerImage} alt={data.contentfulFooter.image.description}>
      <FooterStyle>
        <div
          className="links"
          dangerouslySetInnerHTML={{
            __html: data.contentfulFooter.socialMedia.childMarkdownRemark.html,
          }}
        />

        <div className="copyright">
          {new Date().getFullYear()}
          {data.contentfulFooter.text}
        </div>
      </FooterStyle>
    </BgImage>
  )
}

export default Footer
