import React from "react"

const ResumeLink = ({ title, company, link }) => {
  return (
    <div className="introItem">
      <p>
        {title} <span>@</span>
      </p>
      <a href={link} rel="noreferrer" target="_blank">
        {company}
      </a>
    </div>
  )
}

export default ResumeLink
