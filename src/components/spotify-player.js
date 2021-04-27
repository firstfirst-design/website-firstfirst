import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SectionLayout from "./layouts/section-layout"

const SpotifyPlayerStyle = styled.div`
  @media (min-width: 992px) {
    display: flex;
    .player {
      flex: 3;
      order: 1;
      margin: ${rhythm(0)} ${rhythm(2)} ${rhythm(0)} ${rhythm(0)};
    }

    .text {
      flex: 1;
      order: 2;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function SpotifyPlayer() {
  const data = useStaticQuery(graphql`
    query RadioQuery {
      contentfulRadio {
        title
        text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const radio = data.contentfulRadio

  return (
    <SectionLayout>
      <SpotifyPlayerStyle>
        <div className="text">
          <h3>{radio.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: radio.text.childMarkdownRemark.html,
            }}
          />
        </div>
        <iframe
          className="player"
          title="Spotify"
          src="https://open.spotify.com/embed/playlist/5LLbIbKo31dMi9JfYu8oNk?si=xyHDTLl4R2Kp92Ym_hhoVA"
          width="100%"
          height="350"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </SpotifyPlayerStyle>
    </SectionLayout>
  )
}
