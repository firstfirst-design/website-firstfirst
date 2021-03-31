import React from "react"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"
import IntroLogo from "../components/intro-logo"
import RandomImage from "../components/random-image"
import What from "../components/what"
import Gallery from "../components/gallery"

const HomeStyle = styled.div``

export default function Home() {
  return (
    <PageLayout>
      <SEO
        title="Home"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />
      <IntroLogo />
      <RandomImage />
      <What />
      <Gallery />
    </PageLayout>
  )
}
