/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
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
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/image1.png/" }) {
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
        marginBottom: rhythm(0.5),
      }}
    >


      <p className="hidden" id="pp2" style={{
        fontSize: `22px`,
	fontWeight: `700`
					   }}
      >

       I'm a growth marketer at <Link className="highlight1" href="https://demandcurve.com" target="_blank">Demand Curve (YC S19)</Link>. Before joining the team, I helped raise a seed venture capital fund in San Francisco.
	      </p>
{/*<b
style={{
        fontSize: `29px`,
       marginBottom: rhythm(0.4),
      }}>About </b>*/}

<p>At Penn State I'm studying finance and economics, run club cross country, and am the president of our <Link class="highlight1" target="_blank" href="https://hvcpsu.com/">student vc fund</Link>. During my first two summers of college I interned in derivatives consulting and at a <Link href="http://joinpuzzl.com" target="_blank" class="highlight1">FinTech</Link> startup.</p>

<p>I'm also avid distance <Link class="highlight1" target="_blank" href="https://www.strava.com/athletes/19065423">runner</Link> (45 miles per week), play modern piano, <Link class="highlight1" href="https://www.goodreads.com/maiale" target="_blank">read</Link> non-fiction and philosophy, and have been to over <Link href="https://docs.google.com/document/d/1GrIVKaveYCPvnJQSQQhxn0pXMeWN-j4DtpuXFBtGqoI/edit?usp=sharing" target="_blank" class="highlight1">30 concerts</Link>.</p>
  <b style={{
        fontSize: `29px`,
	marginBottom: rhythm(0),
      }}>Writing</b>
</div>
  )
}

export default Bio
