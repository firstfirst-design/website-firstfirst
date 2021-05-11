import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import SectionLayout from "../components/layouts/section-layout"
import SEO from "../components/seo"

const WhoStyle = styled.div`
  .image {
    vertical-align: bottom;
    margin-bottom: ${rhythm(4)};
  }

  @media (min-width: 992px) {
    .flexbox {
      display: flex;
      flex-direction: row;
    }

    .image {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    .text {
      flex: 2;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Who({ data }) {
  const who = data.contentfulWho
  const whoImage = getImage(who.image)
  return (
    <PageLayout>
      <SectionLayout>
        <WhoStyle>
          <SEO
            title={who.title}
            description={who.description}
            image={who.image}
            slug={who.slug}
          />
          <h1>{who.title}</h1>
          <div className="flexbox">
            <GatsbyImage
              className="image"
              image={whoImage}
              alt={who.image.description}
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: who.text.childMarkdownRemark.html,
              }}
            />
          </div>
        </WhoStyle>
      </SectionLayout>
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
