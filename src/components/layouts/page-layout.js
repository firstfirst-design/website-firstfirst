import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin: ${rhythm(8)} ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};

  .navigation {
    z-index: 1;
    position: fixed;
    top: ${rhythm(1 / 2)};
    right: ${rhythm(1 / 2)};

    h3 {
      text-align: right;
    }
  }

  /*FONT*/

  h1,
  h3,
  h4 {
    text-transform: uppercase;
    text-align: center;
  }

  /*LINKS*/

  a {
    color: black;
    text-decoration-color: blue;
    text-decoration-thickness: ${rhythm(1 / 8)};
    text-underline-offset: ${rhythm(1 / 16)};
  }

  a:hover {
    text-decoration-color: red;
  }

  .active {
    text-decoration-color: red;
  }

  /*FORM*/

  input,
  textarea {
    outline: none;
    resize: none;
    border: none;
    border-bottom: ${rhythm(1 / 10)} solid black;
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
      <div className="navigation">
        <Navigation />
      </div>
      {children}
      <Footer />
    </PageLayoutStyle>
  )
}
