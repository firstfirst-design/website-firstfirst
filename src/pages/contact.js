import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import Form from "../components/form"

const ContactStyle = styled.div``

export default function Contact({ data }) {
  return (
    <PageLayout>
      <SEO
        title="Contact"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />
      <div
        className="contactData"
        dangerouslySetInnerHTML={{
          __html: data.contentfulContact.text.childMarkdownRemark.html,
        }}
      />
      <Form />
    </PageLayout>
  )
}

export const contactQuery = graphql`
  query contactQuery {
    contentfulContact {
      text {
        childMarkdownRemark {
          html
        }
      }
      location {
        lat
        lon
      }
    }
  }
`
