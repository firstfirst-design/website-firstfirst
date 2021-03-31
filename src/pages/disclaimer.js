import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const DiclaimerStyle = styled.div``

export default function Disclaimer({ data }) {
  const disclaimer = data.contentfulDisclaimer
  return (
    <PageLayout>
      <SEO
        title="Disclaimer"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
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
    </PageLayout>
  )
}

export const query = graphql`
  query DisclaimerQuery {
    contentfulDisclaimer {
      title
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
    }
  }
`
