import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

const NavigationStyle = styled.header`
  h3 {
    margin-bottom: ${rhythm(1 / 8)};
  }
`

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      contentfulWho {
        title
        slug
      }
      contentfulBlog {
        title
        slug
      }
      contentfulContact {
        title
        slug
      }
      contentfulDisclaimer {
        title
        slug
      }
    }
  `)

  return (
    <NavigationStyle>
      <Link to="/" activeClassName="active">
        <h3>home</h3>
      </Link>
      <Link to={`/${data.contentfulWho.slug}`} activeClassName="active">
        <h3>{data.contentfulWho.title}</h3>
      </Link>
      <Link to={`/${data.contentfulBlog.slug}`} activeClassName="active">
        <h3>{data.contentfulBlog.title}</h3>
      </Link>
      <Link to={`/${data.contentfulContact.slug}`} activeClassName="active">
        <h3>{data.contentfulContact.title}</h3>
      </Link>
      <Link to={`/${data.contentfulDisclaimer.slug}`} activeClassName="active">
        <h3>{data.contentfulDisclaimer.title}</h3>
      </Link>
    </NavigationStyle>
  )
}
