import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const BackgroundImage = props => {
  const backgroundImage = getImage(props.image)

  return (
    <BgImage
      image={backgroundImage}
      alt={props.alt}
      style={{ minWidth: "100%", minHeight: "100%" }}
    >
      <div>{props.content}</div>
    </BgImage>
  )
}

export default BackgroundImage
