import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Textfit from "react-textfit"

const IntroLogoStyle = styled.div`
  h1 {
    line-height: 0.713;
  }

  .first {
    animation: first 4s step-start infinite;
    animation-delay: 2s;
  }

  @keyframes first {
    50% {
      opacity: 0.5;
    }
  }

  .firstFlipped {
    transform: scaleX(-1);
    animation: firstFlipped 4s step-start infinite;
  }

  @keyframes firstFlipped {
    50% {
      opacity: 0.5;
    }
  }

  @media (min-width: 992px) {
    width: 50%;
    margin: ${rhythm(0)} ${rhythm(0)} ${rhythm(4)} ${rhythm(0)};

    .first {
      margin-bottom: ${rhythm(1)};
    }
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
