import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import MasonryGallery from "../components/layouts/masonry-gallery"
import SEO from "../components/seo"

const BlogStyle = styled.div``

export default function Blog({ data }) {
  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/blog"
      />
      <h1>Blog</h1>
      {data.allContentfulBlog.nodes.map(blog => {
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
              {blog.image.map(images => {
                const image = getImage(images)
                return (
                  <GatsbyImage
                    key={images.id}
                    image={image}
                    alt={images.description}
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
    allContentfulBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        date(formatString: "DD.MM.YYYY")
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
      }
    }
  }
`
