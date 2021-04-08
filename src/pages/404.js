import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import BackgroundImage from "../components/layouts/background-image"

const ErrorStyle = styled.div`
  height: 100vh;
`

const ErrorContentStyle = styled.div`
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          <ErrorContentStyle>
            <h1
              dangerouslySetInnerHTML={{
                __html: error.text.childMarkdownRemark.html,
              }}
            />
          </ErrorContentStyle>
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
