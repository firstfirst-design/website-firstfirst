import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SectionLayout from "./layouts/section-layout"

const WhatStyle = styled.div`
  margin-bottom: ${rhythm(0)};
  width: 50%;
`

export default function What() {
  const data = useStaticQuery(graphql`
    query WhatQuery {
      contentfulWhat {
        title
        childContentfulWhatTextProductTextNode {
          childMarkdownRemark {
            html
          }
        }
        childContentfulWhatTextInteriorTextNode {
          childMarkdownRemark {
            html
          }
        }
        childContentfulWhatTextWebTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const what = data.contentfulWhat
  return (
    <SectionLayout>
      <WhatStyle>
        <h1>{what.title}</h1>
        <div
          className="product"
          dangerouslySetInnerHTML={{
            __html:
              what.childContentfulWhatTextProductTextNode.childMarkdownRemark
                .html,
          }}
        />
        <div
          className="interior"
          dangerouslySetInnerHTML={{
            __html:
              what.childContentfulWhatTextInteriorTextNode.childMarkdownRemark
                .html,
          }}
        />
        <div
          className="web"
          dangerouslySetInnerHTML={{
            __html:
              what.childContentfulWhatTextWebTextNode.childMarkdownRemark.html,
          }}
        />
      </WhatStyle>
    </SectionLayout>
  )
}
