import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={0.5}
    width={360}
    height={485}
    viewBox="0 0 360 485"
    backgroundColor="#d6d6d6"
    foregroundColor="#9e9e9e"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="360" height="395" /> 
    <rect x="0" y="400" rx="5" ry="5" width="360" height="85" />
  </ContentLoader>
)

export default MyLoader