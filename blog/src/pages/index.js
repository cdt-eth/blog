import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Christian Turner's Dev Blog"

    return (
      <Layout location={this.props.location} title={siteTitle} >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, height:250 }} src="./christian.jpg" alt="christian" />
        <h1>
          Hey there{" "}
          <span role="img" aria-label="lightning emoji">
            ⚡️
          </span>
        </h1>
        {/* <p>Welcome to my blog! </p> */}
          {/* You are on your home page.</p> */}
        <p>
          I'm a programmer interested in iOS development and human-computer interaction. I'm in <a href="https://omscs.gatech.edu/" target="_blank">grad school at Georgia Tech</a> getting a Master's in CS with a concentation in machine learning. I'm obssessed with self-learing and furthering my education.
        </p>
        <p>This blog serves as a record of my projects, accomplishments, and learnings.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
