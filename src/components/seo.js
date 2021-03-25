import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

{
  /*MORE INFO: https://www.iamtimsmith.com/blog/creating-a-better-seo-component-for-gatsby */
}

const SEO = ({ title, description, image, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
    }
  `)

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name="description"
        content={description || data.site.siteMetadata.description}
      />
      <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      {/*<link rel="shortcut icon" href={data.favicon.publicURL} />*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iam_timsmith" />
      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content={description || data.site.siteMetadata.description}
      />
      {/*<meta
        name="og:image"
        content={`${data.site.siteMetadata.siteUrl}${
          image || data.social.publicURL
        }`}
    />*/}
      <meta name="og:type" content="website" />
      <meta
        name="og:url"
        content={`${data.site.siteMetadata.siteUrl}/${slug}`}
      />
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
