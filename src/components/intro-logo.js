import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const IntroLogoStyle = styled.div`
  text-transform: uppercase;
  margin-bottom: ${rhythm(2)};
  h1 {
    margin-bottom: ${rhythm(0)};
  }

  #firstFlipped {
    text-align: right;
    transform: scaleX(-1);
  }
`

export default function IntroLogo() {
  return (
    <IntroLogoStyle>
      <h1 id="first">first</h1>
      <h1 id="firstFlipped">first</h1>
      <h1 id="design">design</h1>
    </IntroLogoStyle>
  )
}
