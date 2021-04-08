import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import BackgroundImage from "../components/layouts/background-image"

const MessageSuccessStyle = styled.div`
  height: 100vh;
`

const MessageSuccessContentStyle = styled.div`
  text-align: center;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
          <MessageSuccessContentStyle>
            <h1
              dangerouslySetInnerHTML={{
                __html: messageSuccess.text.childMarkdownRemark.html,
              }}
            />
          </MessageSuccessContentStyle>
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
  }
`
