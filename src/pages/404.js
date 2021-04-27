import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import BackgroundImage from "../components/layouts/background-image"
import SocialMedia from "../components/layouts/social-media"
import Navigation from "../components/layouts/navigation"

const ErrorStyle = styled.div`
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
    color: #e0e0e0;
    text-decoration: none;
  }

  a:hover {
    color: red;
  }

  @media (min-width: 992px) {
    .content {
      margin: ${rhythm(0)} 15% ${rhythm(0)} 15%;
    }
  }
`

export default function Error({ data }) {
  const error = data.contentfulError

  return (
    <ErrorStyle>
      <SEO
        title={error.title}
        description={error.description}
        image={error.image}
        slug={error.slug}
      />

      <BackgroundImage
        image={error.image}
        alt={error.image.description}
        content={
          <div className="content">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: error.text.childMarkdownRemark.html,
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
    </ErrorStyle>
  )
}

export const query = graphql`
  query ErrorQuery {
    contentfulError {
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
  }
`
