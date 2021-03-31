import React from "react"
import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const PageLayoutStyle = styled.div`
  margin-right: ${rhythm(2)};

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
      <Header />
      {children}
      <Footer />
    </PageLayoutStyle>
  )
}
