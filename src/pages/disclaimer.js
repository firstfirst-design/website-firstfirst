import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import SectionLayout from "../components/layouts/section-layout"
import SEO from "../components/seo"

const DisclaimerStyle = styled.div`
  @media (min-width: 992px) {
    .flexbox {
      display: flex;
    }

    .contact {
      flex: 1;
      margin-right: ${rhythm(2)};
    }

    .disclaimer {
      flex: 2;
      margin: ${rhythm(0)} ${rhythm(2)} ${rhythm(0)} ${rhythm(2)};
    }

    .impressum {
      flex: 2;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Disclaimer({ data }) {
  const disclaimer = data.contentfulDisclaimer

  return (
    <DisclaimerStyle>
      <PageLayout>
        <SectionLayout>
          <SEO
            title={disclaimer.title}
            description={disclaimer.description}
            image={disclaimer.image}
            slug={disclaimer.slug}
          />
          <h1>{disclaimer.title}</h1>
          <div className="flexbox">
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
          </div>
        </SectionLayout>
      </PageLayout>
    </DisclaimerStyle>
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
