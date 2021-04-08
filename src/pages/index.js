import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"
import IntroLogo from "../components/intro-logo"
import RandomImage from "../components/random-image"
import What from "../components/what"
import Gallery from "../components/gallery"
import BlogPost from "../components/blog-post"

const HomeStyle = styled.div``

export default function Home({ data }) {
  const home = data.contentfulHome

  return (
    <PageLayout>
      <HomeStyle>
        <SEO
          title={home.title}
          description={home.description}
          image={home.image}
          slug={home.slug}
        />
        <IntroLogo />
        <RandomImage />
        <What />
        <Gallery />
        <BlogPost />
      </HomeStyle>
    </PageLayout>
  )
}

export const query = graphql`
  query HomeQuery {
    contentfulHome {
      title
      description
      image {
        fluid {
          srcWebp
        }
      }
      slug
    }
  }
`
