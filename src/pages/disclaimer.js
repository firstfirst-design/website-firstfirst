import React from "react"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const DiclaimerStyle = styled.div``

export default function Disclaimer() {
  return (
    <PageLayout>
      <SEO
        title="Home"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />
      disclaimer
    </PageLayout>
  )
}
