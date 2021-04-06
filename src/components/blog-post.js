import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPostStyle = styled.div`
  .image {
    vertical-align: bottom;
    filter: grayscale(0);
    :hover {
      filter: grayscale(30%);
    }
  }
`

export default function BlogPost() {
  const data = useStaticQuery(graphql`
    query BlogPostQuery {
      allContentfulBlogPost(sort: { fields: date, order: DESC }, limit: 1) {
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
              excerpt(pruneLength: 350)
            }
          }
        }
      }
    }
  `)

  const blogPost = data.allContentfulBlogPost.nodes

  return (
    <BlogPostStyle>
      {blogPost.map(post => {
        const postImage = getImage(post.image)
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.date}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: post.text.childMarkdownRemark.excerpt,
              }}
            />
            <Link to="/blog">
              <GatsbyImage
                className="image"
                image={postImage}
                alt={postImage.description}
              />
            </Link>
          </div>
        )
      })}
    </BlogPostStyle>
  )
}
