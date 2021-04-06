import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import MasonryGallery from "../components/layouts/masonry-gallery"
import SEO from "../components/seo"

const BlogStyle = styled.div``

export default function Blog({ data }) {
  const blog = data.contentfulBlog
  const blogPost = data.allContentfulBlogPost.nodes
  const image = getImage(blog.image)

  return (
    <PageLayout>
      <SEO
        title="Blog"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/blog"
      />
      <h1>{blog.title}</h1>
      <GatsbyImage image={image} alt={image.description} />
      <div
        dangerouslySetInnerHTML={{
          __html: blog.text.childMarkdownRemark.html,
        }}
      />
      {blogPost.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.date}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: post.text.childMarkdownRemark.html,
              }}
            />

            <MasonryGallery>
              {post.gallery.map(postImages => {
                const galleryImages = getImage(postImages)
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
    contentfulBlog {
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
      text {
        childMarkdownRemark {
          html
        }
      }
    }

    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
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
