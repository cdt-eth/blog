import React from "react"
import Link from "./link"

const Intro = () => {
  return (
    <div>
      <p>
        I'm a Frontend Engineer at Cacheflow. I'm interested in the web3 space
        and am a member of{" "}
        <Link
          text="SharkDAO"
          link="https://sharkdao.community"
          newPage={true}
        />{" "}
        & <Link text="NounsDAO" link="https://nouns.wtf" newPage={true} />. Here
        I blog about my projects, accomplishments, and learnings.
      </p>
    </div>
  )
}

export default Intro
