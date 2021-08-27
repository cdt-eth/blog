import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Christian."

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="christian"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <p>
          I'm a self-taught frontend engineer looking for React/Typescript jobs.
          My work history includes web/graphic design, photography, and mobile
          app management. I'm currently in{" "}
          <a href="https://omscs.gatech.edu/" target="_blank" rel="noreferrer">
            grad school at Georgia Tech
          </a>{" "}
          getting a Master of Computer Science with a concentation in computing
          systems. Here I blog about my projects, accomplishments, and
          learnings.
        </p>

        <p>
          My most recent project was{" "}
          <a href="https://disnyplus.plus" rel="noreferrer" target="_blank">
            a Disney+ clone{" "}
          </a>
          I built from scratch in Typescript & React (
          <a
            href="https://github.com/christiandavidturner/Disney-Plus-Plus"
            rel="noreferrer"
            target="_blank"
          >
            repo
          </a>
          ). I'm currently interested in all things Web3, and I'm teaching
          myself Solidity for smart contract development.
        </p>

        <p>
          View my{" "}
          <a
            href="https://drive.google.com/file/d/1frZ_8FK8C_CJ1E77eeGwoc88sEx7I2KW/view"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </p>
        <div className="intro">
          <div className="introItem">
            <p>
              grad student <span>@</span>
            </p>
            <a
              href="https://omscs.gatech.edu/specialization-computing-systems"
              rel="noreferrer"
              target="_blank"
            >
              georgia tech
            </a>
          </div>
          <div className="introItem">
            <p>
              twitter <span>@</span>
            </p>
            <a
              href="https://twitter.com/cdt_works"
              rel="noreferrer"
              target="_blank"
            >
              cdt_works{" "}
            </a>
          </div>
          <div className="introItem">
            <p>
              github <span>@</span>
            </p>
            <a
              href="https://github.com/christiandavidturner"
              rel="noreferrer"
              target="_blank"
            >
              christiandavidturner{" "}
            </a>
          </div>
          <div className="introItem">
            <p>
              photographer<span>@</span>
            </p>
            <a
              href="https://christiandavidphoto.com/"
              rel="noreferrer"
              target="_blank"
            >
              christian david photo
            </a>
          </div>
        </div>
        <Link to="/blog/" className="homeCTA">
          <img
            style={{ height: 30, paddingRight: 10 }}
            src="https://ceias.nau.edu/capstone/projects/EE/2020/FF1RR-S20/images/computer_b.png"
            alt="computer"
          />
          {"  "}
          <span>Posts →</span>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
