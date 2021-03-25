import React from "react"
import styled from "styled-components"
import PageLayout from "../components/layouts/page-layout"
import SEO from "../components/seo"

const ErrorStyle = styled.div``

export default function Error() {
  return (
    <PageLayout>
      <SEO
        title="Home"
        description="This is the homepage for a gatsby website"
        image="https://placeimg.com/300/300"
        slug="/"
      />
      404
    </PageLayout>
  )
}
