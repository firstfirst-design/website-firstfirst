import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div>
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
    </div>
  )
}
