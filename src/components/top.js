import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

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


const Top = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        marginBottom: rhythm(2.5),
      }}
    >

      <p className="hidden" id="pp2">
        Hey, I'm Matthew. I'm a second-year studying Finance and Economics at{" "}
        <Link
          href="https://psu.edu/"
          target="_blank"
        >
          Penn State
        </Link>
        . I'm currently taking a gap semester to co-op in tech and venture capital in <Link className="highlight1" href="https://www.youtube.com/watch?v=8RZqPq1-1Tw" target="_blank">San Francisco</Link>. I'm passionate about quantitative analysis, technology, and their <Link href="https://medium.com/@maiale/the-foes-and-fallacies-of-bitcoin-and-why-millennials-arent-ready-to-invest-9a096eb52af6" target="_blank" className="highlight1">unique intersection</Link>. I also love <Link href="https://docs.google.com/document/d/1GrIVKaveYCPvnJQSQQhxn0pXMeWN-j4DtpuXFBtGqoI/edit?usp=sharing" target="_blank" className="highlight1">concerts</Link>, spontaneous excursions, <Link className="highlight1" href="https://medium.com/@maiale/intrinsic-motivation-of-running-512a4c97cde2" target="_blank">psychology</Link>, and <Link href="https://docs.google.com/document/d/1sYKeHzy3oulGrTv7__blwa6JnNiDRIzvCfDqSsVQBRM/edit?usp=sharing" target="_blank" className="highlight1">meeting new people</Link>.
      </p>

        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: "280px",
            height: "220px",


          }}


        />
    </div>
  )
}

export default Top
