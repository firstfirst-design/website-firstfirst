import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import MasonryGallery from "../components/layouts/masonry-gallery"

const GalleryStyle = styled.div`
  .image {
    vertical-align: bottom;
  }
`

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allContentfulProjects {
        nodes {
          id
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              quality: 100
              width: 1500
            )
            description
          }
          slug
        }
      }
    }
  `)
  return (
    <GalleryStyle>
      <MasonryGallery>
        {data.allContentfulProjects.nodes.map(gallery => {
          const images = getImage(gallery.image)
          return (
            <Link to={gallery.slug}>
              <GatsbyImage
                className="image"
                key={gallery.id}
                image={images}
                alt={gallery.image.description}
              />
            </Link>
          )
        })}
      </MasonryGallery>
    </GalleryStyle>
  )
}
