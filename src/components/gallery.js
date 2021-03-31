import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import MasonryGallery from "../components/layouts/masonry-gallery"

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
    <div>
      <MasonryGallery>
        {data.allContentfulProjects.nodes.map(gallery => {
          const images = getImage(gallery.image)
          return (
            <Link to={gallery.slug}>
              <GatsbyImage
                key={gallery.id}
                image={images}
                alt={gallery.image.description}
              />
            </Link>
          )
        })}
      </MasonryGallery>
    </div>
  )
}
