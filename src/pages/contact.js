import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import Form from "../components/form"

const ContactStyle = styled.div``

export default function Contact({ data }) {
  const contact = data.contentfulContact

  return (
    <PageLayout>
      <ContactStyle>
        <SEO
          title={contact.title}
          description={contact.description}
          image={contact.image}
          slug={contact.slug}
        />
        <h1>{contact.title}</h1>
        <div
          className="contactData"
          dangerouslySetInnerHTML={{
            __html: contact.text.childMarkdownRemark.html,
          }}
        />
        <Form />
      </ContactStyle>
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
