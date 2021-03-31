import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import BackgroundImage from "../components/layouts/background-image"

const MessageSuccessStyle = styled.div`
  height: 200px;
  width: 200px;
`

export default function MessageSuccess({ data }) {
  const messageSuccess = data.contentfulMessageSuccess

  return (
    <div>
      <SEO
        title="Home"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />

      <BackgroundImage
        image={messageSuccess.image}
        alt={messageSuccess.image.description}
      />

      <MessageSuccessStyle>
        <div
          className="links"
          dangerouslySetInnerHTML={{
            __html: messageSuccess.text.childMarkdownRemark.html,
          }}
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
