import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import MasonryGallery from "../components/layouts/masonry-gallery"
import SEO from "../components/seo"

const BlogStyle = styled.div``

export default function Blog({ data }) {
  const blog = data.allContentfulBlog.nodes

  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/blog"
      />
      <h1>Blog</h1>
      {data.allContentfulAsset.nodes.map(image => {
        const headerImage = getImage(image)
        return (
          <GatsbyImage
            key={headerImage.id}
            image={headerImage}
            alt={headerImage.description}
          />
        )
      })}
      <p>
        Having a mind full of ideas and a polished skillset, we use different
        media to express our creativity. Next to our professional work, we are
        always working on side projects. Sometimes for ourselves, sometimes for
        friends, sometimes for clients. With this interdisciplinary approach, we
        constantly widen our horizon and manage to see projects from different
        angles to create something special.
      </p>

      {blog.map(blog => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <h1>{blog.date}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: blog.text.childMarkdownRemark.html,
              }}
            />

            <MasonryGallery>
              {blog.gallery.map(images => {
                const galleryImages = getImage(images)
                return (
                  <GatsbyImage
                    key={galleryImages.id}
                    image={galleryImages}
                    alt={galleryImages.description}
                  />
                )
              })}
            </MasonryGallery>
          </div>
        )
      })}
    </PageLayout>
  )
}

export const query = graphql`
  query BlogQuery {
    allContentfulAsset(filter: { title: { eq: "fence-nature-pattern" } }) {
      nodes {
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

    allContentfulBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        date(formatString: "DD.MM.YYYY")
        gallery {
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
      }
    }
  }
`
