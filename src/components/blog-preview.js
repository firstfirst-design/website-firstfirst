import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function BlogPreview() {
  const data = useStaticQuery(graphql`
    query BlogPreviewQuery {
      allContentfulBlog(sort: { fields: date, order: DESC }, limit: 1) {
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

  const blogPreview = data.allContentfulBlog.nodes

  return (
    <div>
      {blogPreview.map(blog => {
        const previewImage = getImage(blog.image)
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <h1>{blog.date}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: blog.text.childMarkdownRemark.excerpt,
              }}
            />
            <Link to="/blog">
              <GatsbyImage
                key={previewImage.id}
                image={previewImage}
                alt={previewImage.description}
              />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
