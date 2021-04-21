import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { rhythm } from "../../utils/typography"

export default function MasonryGallery({ children }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 991: 1, 992: 2 }}>
      <Masonry gutter={rhythm(4)}>{children}</Masonry>
    </ResponsiveMasonry>
  )
}
