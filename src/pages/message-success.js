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
    <div>
      <SEO
        title="Message Success"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />
      <MessageSuccessStyle>
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
    </div>
  )
}

export const query = graphql`
  query MessageSuccessQuery {
    contentfulMessageSuccess {
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
      slug
    }
  }
`
