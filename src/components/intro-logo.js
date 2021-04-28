import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Textfit from "react-textfit"

const IntroLogoStyle = styled.div`
  h1 {
    line-height: 0.713;
  }

  .first {
    color: red;
    margin-bottom: ${rhythm(1)};
    animation: first 4s step-start infinite;
    animation-delay: 2s;
  }

  @keyframes first {
    50% {
      color: blue;
    }
  }

  .firstFlipped {
    color: red;
    transform: scaleX(-1);
    animation: firstFlipped 4s step-start infinite;
  }

  @keyframes firstFlipped {
    50% {
      color: blue;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
    margin-bottom: ${rhythm(4)};
  }
`

export default function IntroLogo() {
  return (
    <IntroLogoStyle>
      <h1 className="first">
        <Textfit mode="single" min={1} max={1000}>
          first
        </Textfit>
      </h1>
      <h1 className="firstFlipped">
        <Textfit mode="single" min={1} max={1000}>
          first
        </Textfit>
      </h1>
    </IntroLogoStyle>
  )
}
