import React from "react"
import Footer from "./footer"
import Navigation from "./navigation"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin: ${rhythm(8)} ${rhythm(1 / 2)} ${rhythm(1 / 2)} ${rhythm(1 / 2)};

  .navigation {
    position: fixed;
    top: ${rhythm(1 / 2)};
    right: ${rhythm(1 / 2)};

    h3 {
      text-align: right;
    }
  }

  /*FONT*/

  h1,
  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  /*LINKS*/

  a {
    color: black;
    text-decoration: underline;
  }

  a:hover {
    color: blue;
    text-decoration: none;
  }

  .active {
    color: #e30000;
    text-decoration: none;
  }

  /*FORM*/

  input,
  textarea {
    outline: none;
    resize: none;
    border: none;
    border-bottom: 2px solid black;
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
