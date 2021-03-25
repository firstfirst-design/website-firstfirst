import React from "react"
import Footer from "./footer"
import Header from "./header"
import styled from "styled-components"

const PageLayoutStyle = styled.div``

export default function PageLayout({ children }) {
  return (
    <PageLayoutStyle>
      <Header />
      {children}
      <Footer />
    </PageLayoutStyle>
  )
}
