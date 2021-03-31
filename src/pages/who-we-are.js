import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const WhoStyle = styled.div``

export default function Who({ data }) {
  const who = data.contentfulWho
  return (
    <PageLayout>
      <SEO
        title="Who we are"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/who-we-are"
      />
      <h1>{who.title}</h1>
      <div
        className="interior"
        dangerouslySetInnerHTML={{
          __html: who.childContentfulWhoTextTextNode.childMarkdownRemark.html,
        }}
      />
    </PageLayout>
  )
}

export const query = graphql`
  query WhoQuery {
    contentfulWho {
      title
      childContentfulWhoTextTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
