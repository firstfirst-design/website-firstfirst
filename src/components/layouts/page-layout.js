import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin: ${rhythm(1 / 4)} ${rhythm(2)} ${rhythm(1 / 4)} ${rhythm(1 / 4)};

  /*FONT*/

  h1 {
    text-transform: uppercase;
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
