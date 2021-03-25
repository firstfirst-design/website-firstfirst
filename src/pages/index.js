import React from "react"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

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
      Hello world!
    </PageLayout>
  )
}
