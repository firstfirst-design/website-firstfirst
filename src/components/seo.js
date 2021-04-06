import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

{
  /*MORE INFO: https://www.iamtimsmith.com/blog/creating-a-better-seo-component-for-gatsby */
}

const SEO = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
          favicon {
            svg
          }
        }
      }
    }
  `)

  const siteMetadata = data.site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <title>{props.title}</title>
      <meta
        name="description"
        content={props.description || siteMetadata.description}
      />
      <link rel="canonical" href={`${siteMetadata.url}${props.slug}`} />
      <link rel="shortcut icon" href={siteMetadata.favicon.svg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rudolf__hans" />
      <meta name="og:title" content={props.title} />
      <meta
        name="og:description"
        content={props.description || siteMetadata.description}
      />
      <meta
        name="og:image"
        content={`${siteMetadata.url}${
          props.image || siteMetadata.favicon.svg
        }`}
      />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${siteMetadata.url}/${props.slug}`} />
      <meta name="og:site_name" content={siteMetadata.title} />
    </Helmet>
  )
}

export default SEO
