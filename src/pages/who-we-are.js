import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const WhoStyle = styled.div`
  .image {
    vertical-align: bottom;
  }
`

export default function Who({ data }) {
  const who = data.contentfulWho
  const whoImage = getImage(who.image)
  return (
    <PageLayout>
      <WhoStyle>
        <SEO
          title={who.title}
          description={who.description}
          image={who.image}
          slug={who.slug}
        />
        <h1>{who.title}</h1>
        <GatsbyImage
          className="image"
          image={whoImage}
          alt={who.image.description}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: who.text.childMarkdownRemark.html,
          }}
        />
      </WhoStyle>
    </PageLayout>
  )
}

export const query = graphql`
  query WhoQuery {
    contentfulWho {
      title
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          width: 1500
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
