import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const RandomImageStyle = styled.div`
  height: 200px;
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
  const randomImage = getImage(randomizedImage)

  return (
    <BgImage
      image={randomImage}
      alt={data.contentfulRandomImage.randomImages.description}
    >
      <RandomImageStyle />
    </BgImage>
  )
}

export default RandomImage
