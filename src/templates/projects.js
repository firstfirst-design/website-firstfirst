import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import MasonryGallery from "../components/layouts/masonry-gallery"

const ProjectsStyle = styled.div`
  .image {
    vertical-align: bottom;
  }
`

export default function Projects({ data }) {
  const projects = data.contentfulProjects
  const image = getImage(projects.image)

  return (
    <PageLayout>
      <ProjectsStyle>
        <h1>{projects.title}</h1>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: projects.info.childMarkdownRemark.html,
          }}
        />
        <GatsbyImage className="image" image={image} alt={image.description} />
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: projects.text.childMarkdownRemark.html,
          }}
        />
        <MasonryGallery>
          {projects.gallery.map(galleryImage => {
            const image = getImage(galleryImage)
            return (
              <GatsbyImage
                className="image"
                key={galleryImage.id}
                image={image}
                alt={galleryImage.description}
              />
            )
          })}
        </MasonryGallery>
      </ProjectsStyle>
    </PageLayout>
  )
}

export const projectsQuery = graphql`
  query($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
      info {
        childMarkdownRemark {
          html
        }
      }
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
      text {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        id
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          quality: 100
          width: 1500
        )
        description
      }
    }
  }
`
