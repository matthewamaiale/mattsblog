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

<h2><b>What I'm up to</b></h2>
<p style="font-color: black; font-size: 1.24em;">I took a gap semester in spring 2020 to work at a venture capital fund in San Francisco. After working with tons of awesome investors and founders, I decided to double down and also take off the fall semester to join Demand Curve.</p>

<h2><b>Education + learning</b></h2>
<p style="font-color: black; font-size: 1.24em; ">At Penn State I'm studying Finance + Economics (3.95 gpa, '22), am the President of our <a class="highlight1" target="_blank" href="https://hvcpsu.com/">student-run VC fund</a>, and run club cross country. During my first two summers of college I interned in <a class="highlight1" target="_blank" href="http://chathamfinancial.com/">derivatives consulting</a> and at a <a href="http://joinpuzzl.com" target="_blank" class="highlight1">FinTech</a> startup.</p>
<h2><b>Interests</b></h2>
<p style="font-color: black; font-size: 1.24em;">I've an avid distance <a class="highlight1" target="_blank" href="https://www.strava.com/athletes/19065423">runner</a> (9:37 two mile) averaging 45 miles per week. I'm also learning Spanish, play piano, <a class="highlight1" href="https://www.goodreads.com/maiale" target="_blank">read</a> non-fiction and classics, and have been to over <a href="https://docs.google.com/document/d/1GrIVKaveYCPvnJQSQQhxn0pXMeWN-j4DtpuXFBtGqoI/edit?usp=sharing" target="_blank" class="highlight1">30 concerts</a>.</p>

<h2><b>More on me</b></h2>
<p style="font-color: black; font-size: 1.24em;"><a class="highlight2" href="mailto:m@maiale.me" target="_blank">Email</a> ∙ <a class="highlight2" href="https://www.linkedin.com/in/mattmaiale/" target="_blank">LinkedIn</a>
  ∙
	<a href="https://medium.com/@maiale" target="_blank" class="highlight2">Medium</a> ∙
<a class="highlight2" href="https://www.twitter.com/mattmaiale" target="_blank">Twitter</a>

</p>  </div>
  )
}

export default Bio
