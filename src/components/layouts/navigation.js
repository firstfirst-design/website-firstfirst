import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
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
      contentfulDisclaimer {
        slug
      }
    }
  `)

  const disclaimer = data.contentfulDisclaimer.slug

  return (
    <Container>
      <Link to="/who-we-are">who we are</Link>
      <Link to="/blog" id="blog">
        blog
      </Link>
      <Link to="/contact">contact</Link>
      <Link to={`/${disclaimer}`} id={disclaimer}>
        {disclaimer}
      </Link>
    </Container>
  )
}
