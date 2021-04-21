import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"
import MasonryGallery from "../components/layouts/masonry-gallery"

const ProjectsStyle = styled.div`
  .image {
    vertical-align: bottom;
  }

  .text {
    margin-bottom: ${rhythm(-1)};
  }
`

export default function Projects({ data }) {
  const projects = data.contentfulProjects
  const image = getImage(projects.image)

  return (
    <PageLayout>
      <SEO
        title={projects.title}
        description={projects.description}
        image={image}
        slug={projects.slug}
      />

      <ProjectsStyle>
        <h1>{projects.title}</h1>
        <p>{projects.client}</p>
        <p>{projects.work}</p>

        <GatsbyImage
          className="image"
          image={image}
          alt={projects.image.description}
        />
        <div
          className="text"
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

        {data.allContentfulProjects.nodes.map(projects => {
          return (
            <Link
              to={`/${projects.slug}`}
              key={projects.id}
              activeClassName="active"
            >
              <h1>{`${projects.title} -${projects.work}`}</h1>
            </Link>
          )
        })}
      </ProjectsStyle>
    </PageLayout>
  )
}

export const projectsQuery = graphql`
  query($id: String!) {
    contentfulProjects(id: { eq: $id }) {
      id
      title
      client
      work
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
      description
      slug
    }
    allContentfulProjects {
      nodes {
        id
        title
        work
        slug
      }
    }
  }
`
