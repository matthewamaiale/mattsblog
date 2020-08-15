import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Inter, sans-serif`,
            marginTop: 0,
            fontSize: `18px`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(25.5),
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
         <Link style={{
              boxShadow: `none`,
              textDecoration: `none`,
             
      }}

      href="mailto:m@maiale.me" target="_blank">Email</Link> ∙ <Link style={{
              boxShadow: `none`,
              textDecoration: `none`,
             
      }} class="highlight1" href="https://www.linkedin.com/in/mattmaiale/" target="_blank">LinkedIn</Link> ∙ <Link style={{
              boxShadow: `none`,
              textDecoration: `none`,
             
      }} href="https://medium.com/@maiale" target="_blank" class="highlight1">Medium</Link> ∙ 
<Link style={{
              boxShadow: `none`,
              textDecoration: `none`,
             
      }} class="highlight1" href="https://www.twitter.com/mattmaiale" target="_blank"> Twitter</Link>
        </footer>
      </div>
    )
  }
}

export default Layout
