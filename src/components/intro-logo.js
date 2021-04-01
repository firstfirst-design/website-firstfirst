import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const IntroLogoStyle = styled.div`
  margin-bottom: ${rhythm(0)};
  h1 {
    margin-bottom: ${rhythm(0)};
  }

  #first {
    animation: first 4s step-start infinite;
    animation-delay: 2s;
  }

  @keyframes first {
    50% {
      opacity: 0.5;
    }
  }

  #firstFlipped {
    text-align: right;
    transform: scaleX(-1);
    animation: firstFlipped 4s step-start infinite;
  }

  @keyframes firstFlipped {
    50% {
      opacity: 0.5;
    }
  }
`

export default function IntroLogo() {
  return (
    <IntroLogoStyle>
      <h1 id="first">first</h1>
      <h1 id="firstFlipped">first</h1>
    </IntroLogoStyle>
  )
}
