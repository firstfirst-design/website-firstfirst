import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import BackgroundImage from "../components/layouts/background-image"
import SocialMedia from "../components/layouts/social-media"
import Navigation from "../components/layouts/navigation"

const MessageSuccessStyle = styled.div`
  color: white;
  height: 100vh;

  .content {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    text-transform: uppercase;
  }

  a {
    color: white;
    text-decoration-color: blue;
    text-decoration-thickness: ${rhythm(1 / 8)};
    text-underline-offset: ${rhythm(1 / 16)};
  }

  a:hover {
    text-decoration-color: red;
  }

  @media (min-width: 992px) {
    .content {
      margin: ${rhythm(0)} 15% ${rhythm(0)} 15%;
    }
  }
`

export default function MessageSuccess({ data }) {
  const messageSuccess = data.contentfulMessageSuccess

  return (
    <MessageSuccessStyle>
      <SEO
        title={messageSuccess.title}
        description={messageSuccess.description}
        image={messageSuccess.image}
        slug={messageSuccess.slug}
      />

      <BackgroundImage
        image={messageSuccess.image}
        alt={messageSuccess.image.description}
        content={
          <div className="content">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: messageSuccess.text.childMarkdownRemark.html,
                }}
              />
              <div className="flexbox">
                <Navigation />
                <SocialMedia />
              </div>
            </div>
          </div>
        }
      />
    </MessageSuccessStyle>
  )
}

export const query = graphql`
  query MessageSuccessQuery {
    contentfulMessageSuccess {
      title
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        description
      }
      text {
        childMarkdownRemark {
          html
        }
      }
      description
      slug
    }
    contentfulHome {
      title
    }
  }
`
