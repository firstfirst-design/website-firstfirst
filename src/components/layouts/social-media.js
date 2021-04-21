import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function SocialMedia() {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      contentfulSocialMedia {
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const socialMedia = data.contentfulSocialMedia

  return (
    <h3
      dangerouslySetInnerHTML={{
        __html: socialMedia.text.childMarkdownRemark.html,
      }}
    />
  )
}
