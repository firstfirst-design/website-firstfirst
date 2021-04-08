import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationStyle = styled.header`
  position: fixed;
  right: 1.25rem;
  bottom: 0;
  width: 100vh;
  transform: rotate(90deg);
  transform-origin: bottom right;
  margin-bottom: 0rem;

  display: flex;
  justify-content: space-evenly;
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
        {data.contentfulWho.title}
      </Link>
      <Link to={`/${data.contentfulBlog.slug}`} activeClassName="active">
        {data.contentfulBlog.title}
      </Link>
      <Link to={`/${data.contentfulContact.slug}`} activeClassName="active">
        {data.contentfulContact.title}
      </Link>
      <Link to={`/${data.contentfulDisclaimer.slug}`} activeClassName="active">
        {data.contentfulDisclaimer.title}
      </Link>
    </NavigationStyle>
  )
}
