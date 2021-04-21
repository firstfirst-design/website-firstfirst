import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const SectionLayoutStyle = styled.div`
  margin-bottom: ${rhythm(5)};

  @media (min-width: 992px) {
    margin-bottom: ${rhythm(15)};
  }
`

export default function SectionLayout({ children }) {
  return <SectionLayoutStyle>{children}</SectionLayoutStyle>
}
