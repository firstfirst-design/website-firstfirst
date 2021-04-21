import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin: ${rhythm(0)} ${rhythm(2)} ${rhythm(0)} ${rhythm(0)};

  /*FONT*/

  h1,
  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  /*LINKS*/

  a {
    color: #b0e0e6;
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
    margin: ${rhythm(15)} 15% ${rhythm(1 / 2)} 15%;

    h1,
    h3 {
      text-align: left;
    }
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
