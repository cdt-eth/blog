import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Christian."
    // const siteTitle = "Apple"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="christian"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img
          style={{ margin: 0, height: 250 }}
          src="./christian.jpg"
          alt="christian"
        /> */}

        <div className="intro">
          <div className="introItem">
            <p>
              web ops <span>@</span>
            </p>
            <a href="https://kikcorp.com/" rel="noreferrer" target="_blank">
              biolab
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

        <p>
          I'm a self-taught frontend engineer. I have design and product
          ownership experience. I'm currently in{" "}
          <a href="https://omscs.gatech.edu/" target="_blank" rel="noreferrer">
            grad school at Georgia Tech
          </a>{" "}
          getting a Master of Computer Science with a concentation in computing
          systems. Here I blog about my projects, accomplishments, and
          learnings.
        </p>
        {/* <p>
          This blog serves as a record of my projects, accomplishments, and
          learnings.
        </p> */}
        <Link to="/blog/" className="homeCTA">
          <img
            style={{ height: 30, paddingRight: 10 }}
            // src="./comp.png"
            src="https://ceias.nau.edu/capstone/projects/EE/2020/FF1RR-S20/images/computer_b.png"
            alt="computer"
          />
          {"  "}
          <span>Posts →</span>
          {/* <Button marginTop="35px">Read →</Button> */}
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
