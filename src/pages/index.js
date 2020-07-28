import React from "react"
import { Link, graphql } from "gatsby"

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
  );

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
