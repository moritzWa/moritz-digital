/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={130}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>I'm building <a href="https://remnote.com">RemNote.com</a>. I grew up in Germany and previously studied Software Engineering at CODE University of Applied Sciences. I strive to accelerate scientific and technological progress by building a new evolution of tools and systems for knowledge creation. Find me on <a href="https://github.com/pc">GitHub</a>, <a href="https://twitter.com/moritzW42">Twitter</a>, <a href="https://linkedin.com/in/moritzw">LinkedIn</a>, <a href="https://www.producthunt.com/@moritzwallawitsch">Product Hunt</a>, or <a href="https://goodreads.com/moritzw">Goodreads</a>.</p>
        </div>
      )}
    </div>
  )
}

export default Bio
