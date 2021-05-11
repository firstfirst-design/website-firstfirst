import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SectionLayout from "./layouts/section-layout"

const WhatStyle = styled.div`
  margin-bottom: ${rhythm(0)};

  .headingIntro {
    margin-bottom: ${rhythm(8)};
  }

  .intro,
  .product,
  .interior {
    margin-bottom: ${rhythm(4)};
  }

  @media (min-width: 992px) {
    width: 50%;

    .headingIntro {
      margin-bottom: ${rhythm(16)};
    }
  }
`

export default function What() {
  const data = useStaticQuery(graphql`
    query WhatQuery {
      contentfulWhat {
        headingIntro {
          childMarkdownRemark {
            html
          }
        }

        title
        text {
          childMarkdownRemark {
            html
          }
        }
        headingProduct
        textProduct {
          childMarkdownRemark {
            html
          }
        }
        headingInterior
        textInterior {
          childMarkdownRemark {
            html
          }
        }
        headingWeb
        textWeb {
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
        <h3
          className="headingIntro"
          dangerouslySetInnerHTML={{
            __html: what.headingIntro.childMarkdownRemark.html,
          }}
        />
        <h1>{what.title}</h1>
        <div
          className="intro"
          dangerouslySetInnerHTML={{
            __html: what.text.childMarkdownRemark.html,
          }}
        />
        <h3>{what.headingProduct}</h3>
        <div
          className="product"
          dangerouslySetInnerHTML={{
            __html: what.textProduct.childMarkdownRemark.html,
          }}
        />
        <h3>{what.headingInterior}</h3>
        <div
          className="interior"
          dangerouslySetInnerHTML={{
            __html: what.textInterior.childMarkdownRemark.html,
          }}
        />
        <h3>{what.headingWeb}</h3>
        <div
          className="web"
          dangerouslySetInnerHTML={{
            __html: what.textWeb.childMarkdownRemark.html,
          }}
        />
      </WhatStyle>
    </SectionLayout>
  )
}
