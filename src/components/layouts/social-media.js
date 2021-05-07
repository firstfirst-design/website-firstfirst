import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const SocialMediaStyle = styled.div`
  margin-bottom: ${rhythm(-1 / 8)};

  p {
    margin-bottom: ${rhythm(0)};
  }

  h3 {
    margin-bottom: ${rhythm(1 / 8)};
  }
`

export default function SocialMedia() {
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      contentfulSocialMedia {
        xing {
          childMarkdownRemark {
            html
          }
        }
        linkedin {
          childMarkdownRemark {
            html
          }
        }
        instagram {
          childMarkdownRemark {
            html
          }
        }
        facebook {
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
          __html: socialMedia.xing.childMarkdownRemark.html,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: socialMedia.linkedin.childMarkdownRemark.html,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: socialMedia.instagram.childMarkdownRemark.html,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: socialMedia.facebook.childMarkdownRemark.html,
        }}
      />
    </SocialMediaStyle>
  )
}
