import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const DisclaimerStyle = styled.div``

export default function Disclaimer({ data }) {
  const disclaimer = data.contentfulDisclaimer

  return (
    <PageLayout>
      <DisclaimerStyle>
        <SEO
          title={disclaimer.title}
          description={disclaimer.description}
          image={disclaimer.image}
          slug={disclaimer.slug}
        />
        <h1>{disclaimer.title}</h1>
        <div
          className="contact"
          dangerouslySetInnerHTML={{
            __html:
              disclaimer.childContentfulDisclaimerTextContactTextNode
                .childMarkdownRemark.html,
          }}
        />
        <div
          className="disclaimer"
          dangerouslySetInnerHTML={{
            __html:
              disclaimer.childContentfulDisclaimerTextDisclaimerTextNode
                .childMarkdownRemark.html,
          }}
        />
        <div
          className="impressum"
          dangerouslySetInnerHTML={{
            __html:
              disclaimer.childContentfulDisclaimerTextImpressumTextNode
                .childMarkdownRemark.html,
          }}
        />
      </DisclaimerStyle>
    </PageLayout>
  )
}

export const query = graphql`
  query DisclaimerQuery {
    contentfulDisclaimer {
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
      childContentfulDisclaimerTextContactTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulDisclaimerTextDisclaimerTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulDisclaimerTextImpressumTextNode {
        childMarkdownRemark {
          html
        }
      }
      description
      slug
    }
  }
`
