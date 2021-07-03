import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'


//importing from Gatsby
import { Link } from "gatsby"

const HomePage = () => (
  <Layout pageTitle="Home Page">
    <p>Welcome to our new Gatsby site.</p>
    <p>Sit back, relax and enjoy.</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
  </Layout>
)

export default HomePage
