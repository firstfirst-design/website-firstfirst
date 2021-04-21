import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import SectionLayout from "../components/layouts/section-layout"
import Form from "../components/form"

const ContactStyle = styled.div`
  @media (min-width: 992px) {
    .flexbox {
      display: flex;
      flex-direction: row;
    }

    .text {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    .form {
      flex: 2;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Contact({ data }) {
  const contact = data.contentfulContact

  return (
    <PageLayout>
      <SectionLayout>
        <ContactStyle>
          <SEO
            title={contact.title}
            description={contact.description}
            image={contact.image}
            slug={contact.slug}
          />
          <h1>{contact.title}</h1>
          <div className="flexbox">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: contact.text.childMarkdownRemark.html,
              }}
            />
            <div className="form">
              <Form />
            </div>
          </div>
        </ContactStyle>
      </SectionLayout>
    </PageLayout>
  )
}

export const contactQuery = graphql`
  query contactQuery {
    contentfulContact {
      title
      text {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
        description
      }
      location {
        lat
        lon
      }
      description
      slug
    }
  }
`
