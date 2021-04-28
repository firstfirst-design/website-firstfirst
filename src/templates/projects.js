import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import SectionLayout from "../components/layouts/section-layout"
import SEO from "../components/seo"
import MasonryGallery from "../components/layouts/masonry-gallery"

const ProjectsStyle = styled.div`
  .titleImage {
    vertical-align: bottom;
    margin-bottom: ${rhythm(8)};
  }

  .projectLinksH3 {
    margin-bottom: ${rhythm(1 / 8)};
  }

  }

  .text {
    margin-bottom: ${rhythm(2)};
  }

  @media (min-width: 992px) {h4 {
  text-align: left !important;
}


    .title {
      flex: 3;
      margin-right: ${rhythm(1)};
    }
    .placeholder {
      flex: 1;
      margin-left: ${rhythm(1)};
    }

    .flexbox {
      display: flex;
    }

    .titleImage {
      flex: 3;
      margin-right: ${rhythm(2)};
    }

    .info {
      flex: 1;
      margin-left: ${rhythm(2)};
    }

   .text {
      width: 50%;
      padding-right: ${rhythm(1)};
    }

    .links {
      margin-bottom: ${rhythm(8)};
    }
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
        <div className="flexbox">
          <h1 className="title">{projects.title}</h1>
          <div className="placeholder"></div>
        </div>
        <div className="flexbox">
          <GatsbyImage
            className="titleImage"
            image={image}
            alt={projects.image.description}
          />

          <div className="info">
            <h3>{projects.client}</h3>
            <h4>{projects.work}</h4>
          </div>
        </div>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: projects.text.childMarkdownRemark.html,
          }}
        />
        <SectionLayout>
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
        </SectionLayout>

        <div className="links">
          {data.allContentfulProjects.nodes.map(projects => {
            return (
              <Link
                to={`/${projects.slug}`}
                key={projects.id}
                activeClassName="active"
              >
                <h3 className="projectLinksH3">{projects.title}</h3>
                <h4>{projects.work}</h4>
              </Link>
            )
          })}
        </div>
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
