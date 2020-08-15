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

<b>What I'm up to</b>
      <p className="hidden" id="pp2">
	      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
         
          marginBottom: 0,
          maxWidth: `75`,
	  height: `75`,
	  float: `right`,
        }}
        imgStyle={{
        }}
      />
       I took a gap semester in spring 2020 to work at a venture capital fund in San Francisco. After working with tons of awesome investors and founders, I decided to double down and also take off the fall semester to join <Link className="highlight1" href="https://demandcurve.com" target="_blank">Demand Curve (YC S19)</Link>.
	      </p>
  <b>Education + Learning</b>
<p>At Penn State I'm studying Finance + Economics (3.95 gpa, '22), am the President of our <Link class="highlight1" target="_blank" href="https://hvcpsu.com/">student-run VC fund</Link>, and run club cross country. During my first two summers of college I interned in <Link class="highlight1" target="_blank" href="http://chathamfinancial.com/">derivatives consulting</Link> and at a <Link href="http://joinpuzzl.com" target="_blank" class="highlight1">FinTech</Link> startup.</p>
  <b>Interests</b>
<p>I've an avid distance <Link class="highlight1" target="_blank" href="https://www.strava.com/athletes/19065423">runner</Link> (9:37 two mile) averaging 45 miles per week. I'm also learning Spanish, play piano, <Link class="highlight1" href="https://www.goodreads.com/maiale" target="_blank">read</Link> non-fiction and classics, and have been to over <Link href="https://docs.google.com/document/d/1GrIVKaveYCPvnJQSQQhxn0pXMeWN-j4DtpuXFBtGqoI/edit?usp=sharing" target="_blank" class="highlight1">30 concerts</Link>.</p>
  
</div>
  )
}

export default Bio
