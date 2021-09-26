import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeLink from "../components/resumelink"
import Resume from "../components/resume"
import Intro from "../components/intro"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Christian."

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="christian"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Intro />

        {/* <Resume /> */}

        <div className="intro">
          <ResumeLink
            title="frontend engineer"
            company="cacheflow"
            link="https://getcacheflow.com"
          />
          <ResumeLink
            title="twitter"
            company="cdt_works"
            link="https://twitter.com/cdt_works"
          />
          <ResumeLink
            title="github"
            company="christiandavidphoto"
            link="https://github.com/christiandavidturner"
          />
          <ResumeLink
            title="photographer"
            company="christiandavidturner"
            link="https://christiandavidphoto.com"
          />
          <ResumeLink
            title="dao"
            company="sharkdao"
            link="https://sharkdao.community"
          />
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
