import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "./layouts/background-image"
import SectionLayout from "./layouts/section-layout"

const RandomImageStyle = styled.div`
  height: 100vh;
`

const RandomImage = () => {
  const data = useStaticQuery(
    graphql`
      query RandomIamgeQuery {
        contentfulRandomImage {
          randomImages {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            description
          }
        }
      }
    `
  )

  const images = data.contentfulRandomImage.randomImages
  const randomizedImage = images[Math.floor(Math.random() * images.length)]

  return (
    <SectionLayout>
      <RandomImageStyle>
        <BackgroundImage
          image={randomizedImage}
          alt={randomizedImage.description}
        />
      </RandomImageStyle>
    </SectionLayout>
  )
}

export default RandomImage
