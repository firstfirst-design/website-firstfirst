import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin: ${rhythm(0)} ${rhythm(2)} ${rhythm(0)} ${rhythm(0)};

  /*FONT*/

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  /*LINKS*/

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    color: red;
  }

  .active {
    color: red;
  }

  /*FORM*/

  input,
  textarea {
    outline: none;
    resize: none;
    border: none;
    border-bottom: 1px solid black;
  }

  @media (min-width: 992px) {
    margin: ${rhythm(15)} 15% ${rhythm(1)} 15%;
  }
`

export default function PageLayout({ children }) {
  return (
    <PageLayoutStyle>
      <Navigation />
      {children}
      <Footer />
    </PageLayoutStyle>
  )
}
