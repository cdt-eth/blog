import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h2>
          <span role="img" aria-label="Siren">
            🚨
          </span>{" "}
          404: Not Found{" "}
          <span role="img" aria-label="Siren">
            🚨
          </span>
        </h2>
        <h3>
          It's not you it's- well, maybe it <em>was</em> you...
        </h3>
        <img
          src="https://media.wired.com/photos/595496e1267cf6013d251dde/master/pass/ezgif.com-optimize-1.gif"
          frameBorder="0"
          allowFullScreen=""
          alt="error-gif"
        />
        {/* <p>Feel free the spin the wheel and try again.</p> */}
        <div>
          <Link to="/" className="homeCTA">
            <img
              style={{ height: 30, paddingRight: 10 }}
              src="https://ceias.nau.edu/capstone/projects/EE/2020/FF1RR-S20/images/computer_b.png"
              // src="https://toppng.com/uploads/preview/ixel-computer-pixel-art-maker-computer-11563500438gveddda3sg.png"
              alt="computer"
            />
            {"  "}
            <span>Blog →</span>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
