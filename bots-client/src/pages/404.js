import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
  <main className="error-page">
    <div className="error-container"></div>
    <h1>Page not found ! ☹ </h1>
    <Link to="/" className="btn">Back to Home</Link>
  </main>
    </Layout>
  )
}

export default Error
