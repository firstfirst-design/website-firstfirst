import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

const NavigationStyle = styled.header`
  position: fixed;
  right: 3rem;
  bottom: 0;
  width: 100vh;
  transform: rotate(90deg);
  transform-origin: bottom right;
  margin-bottom: 0;

  display: flex;
  justify-content: space-evenly;

  @media (min-width: 992px) {
    margin-bottom: 0;
    right: ${rhythm(4)};
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
      <Link to={`/${data.contentfulWho.slug}`} activeClassName="active">
        <h4>{data.contentfulWho.title}</h4>
      </Link>
      <Link to={`/${data.contentfulBlog.slug}`} activeClassName="active">
        <h4>{data.contentfulBlog.title}</h4>
      </Link>
      <Link to={`/${data.contentfulContact.slug}`} activeClassName="active">
        <h4>{data.contentfulContact.title}</h4>
      </Link>
      <Link to={`/${data.contentfulDisclaimer.slug}`} activeClassName="active">
        <h4>{data.contentfulDisclaimer.title}</h4>
      </Link>
    </NavigationStyle>
  )
}
