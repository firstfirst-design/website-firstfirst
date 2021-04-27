import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const SocialMediaStyle = styled.div`
  h3 {
    margin-bottom: ${rhythm(-1)};
  }
`

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
    <SocialMediaStyle>
      <h3
        dangerouslySetInnerHTML={{
          __html: socialMedia.text.childMarkdownRemark.html,
        }}
      />
    </SocialMediaStyle>
  )
}
