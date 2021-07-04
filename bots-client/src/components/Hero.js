import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const query = graphql`
{
  file(relativePath: {eq: "heroimage.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {file:{childImageSharp: { fluid }}} = useStaticQuery(query) 

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h2>Welcome to sasa-ai</h2>
            <h4>We satisfy your bot needs</h4>
            <Link to="/contact" className="btn">Hire Us</Link>
            <SocialLinks />
        </div>
      </article>
      <Image fluid={ fluid } className="hero-img" />
    </div>
  </header>
}

export default Hero
