import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
const Link = styled.a`
  background: linear-gradient(181deg,rgba(255,255,255,0) 60%, rgb(225,208,255,.6) 40%);
  border-radius: 17%;
  border-bottom: dotted 0px;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: none;
  &:hover {
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(0,87,169, .13) 40%);
    border-radius: 17%;
    border-bottom: dotted 0px;
    text-decoration: none;
    box-shadow: none;
    color: #8f7afb;
  }
`

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
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
         <Link class="highlight1" href="mailto:m@maiale.me" target="_blank">Email</Link> ∙ <Link class="highlight1" href="https://www.linkedin.com/in/mattmaiale/" target="_blank">LinkedIn</Link> ∙ <Link href="https://medium.com/@maiale" target="_blank" class="highlight1">Medium</Link> ∙ 
<Link class="highlight1" href="https://www.twitter.com/mattmaiale" target="_blank">Twitter</Link>
        </footer>
      </div>
    )
  }
}

export default Layout
