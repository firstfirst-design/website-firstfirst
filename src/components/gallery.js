import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import MasonryGallery from "../components/layouts/masonry-gallery"
import SectionLayout from "./layouts/section-layout"
import { rhythm } from "../utils/typography"

const StyledLink = styled(Link)`
  .image {
    vertical-align: bottom;
  }

  .text {
    margin-top: ${rhythm(1 / 2)};
  }
`

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allContentfulProjects(sort: { fields: orderNumber, order: DESC }) {
        nodes {
          id
          title
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
    <SectionLayout>
      <MasonryGallery>
        {data.allContentfulProjects.nodes.map(gallery => {
          const images = getImage(gallery.image)
          return (
            <StyledLink to={gallery.slug}>
              <GatsbyImage
                className="image"
                key={gallery.id}
                image={images}
                alt={gallery.image.description}
              />
              <div className="text">{gallery.title}</div>
            </StyledLink>
          )
        })}
      </MasonryGallery>
    </SectionLayout>
  )
}
