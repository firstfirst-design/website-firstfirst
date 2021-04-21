import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import SectionLayout from "./layouts/section-layout"

const BlogPostStyle = styled.div`
  .image {
    vertical-align: bottom;
    filter: grayscale(0);
    :hover {
      filter: grayscale(30%);
    }
  }

  @media (min-width: 992px) {
    .flexbox {
      display: flex;
      flex-direction: row;
    }

    .text {
      flex: 1;
      margin-right: ${rhythm(2)};
    }
    .link {
      flex: 3;
      margin-left: ${rhythm(2)};
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
    <SectionLayout>
      <BlogPostStyle>
        {blogPost.map(post => {
          const postImage = getImage(post.image)
          return (
            <div key={post.id} className="flexbox">
              <div className="text">
                <h1>{post.title}</h1>
                <h3>{post.date}</h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: post.text.childMarkdownRemark.excerpt,
                  }}
                />
              </div>
              <Link to="/blog" className="link">
                <GatsbyImage
                  className="image"
                  image={postImage}
                  alt={post.image.description}
                />
              </Link>
            </div>
          )
        })}
      </BlogPostStyle>
    </SectionLayout>
  )
}
