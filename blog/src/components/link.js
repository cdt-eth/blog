import React from "react"

const Link = ({ text, link, newPage }) => {
  return (
    <a href={link} target={newPage ? "_blank" : "_self"} rel="noreferrer">
      {text}
    </a>
  )
}

export default Link
