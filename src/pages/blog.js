import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import PageLayout from "../components/layouts/page-layout"
import MasonryGallery from "../components/layouts/masonry-gallery"
import SEO from "../components/seo"
import SectionLayout from "../components/layouts/section-layout"

const BlogStyle = styled.div`
  .image {
    vertical-align: bottom;
  }

  @media (min-width: 992px) {
    .flexbox {
      display: flex;
      flex-direction: row;
    }

    .titleImage {
      flex: 3;
      margin-right: ${rhythm(2)};
    }
    .text {
      flex: 1;
      margin-left: ${rhythm(2)};
    }
  }
`

export default function Blog({ data }) {
  const blog = data.contentfulBlog
  const blogPost = data.allContentfulBlogPost.nodes
  const image = getImage(blog.image)

  return (
    <PageLayout>
      <SEO
        title={blog.title}
        description={blog.description}
        image={image}
        slug={blog.slug}
      />

      <BlogStyle>
        <h1>{blog.title}</h1>
        <SectionLayout>
          <div className="flexbox">
            <GatsbyImage
              image={image}
              alt={blog.image.description}
              className="titleImage"
            />
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: blog.text.childMarkdownRemark.html,
              }}
            />
          </div>
        </SectionLayout>

        {blogPost.map(post => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <h3>{post.date}</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: post.text.childMarkdownRemark.html,
                }}
              />
              <SectionLayout>
                <MasonryGallery>
                  {post.gallery.map(postImages => {
                    const galleryImages = getImage(postImages)
                    return (
                      <GatsbyImage
                        key={galleryImages.id}
                        image={galleryImages}
                        alt={postImages.description}
                        className="image"
                      />
                    )
                  })}
                </MasonryGallery>
              </SectionLayout>
            </div>
          )
        })}
      </BlogStyle>
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
      description
      slug
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
