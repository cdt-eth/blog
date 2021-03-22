import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          className="siteTitle"
          style={{
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {/* {title} */}
            <p
              href="/"
              className="siteTitle"
              style={{
                ...scale(1.75),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              <span class="green">C</span>
              <span class="orange">h</span>
              <span class="yellow">r</span>
              <span class="purple">i</span>
              <span class="pink">s</span>
              <span class="green">t</span>
              <span class="orange">i</span>
              <span class="yellow">a</span>
              <span class="purple">n</span>
              <span class="pink">.</span>
            </p>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          {/* <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link> */}
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {/* {title} */}
            <p
              href="/"
              className="siteTitle"
              style={{
                ...scale(1.75),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              <span class="green">C</span>
              <span class="orange">h</span>
              <span class="yellow">r</span>
              <span class="purple">i</span>
              <span class="pink">s</span>
              <span class="green">t</span>
              <span class="orange">i</span>
              <span class="yellow">a</span>
              <span class="purple">n</span>
              <span class="pink">.</span>
            </p>
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(35),
            // maxWidth: rhythm(44),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer className="footerText">
          © {new Date().getFullYear()} |{` `}
          <a href="mailto:christianturner@hey.com">christianturner@hey.com</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
