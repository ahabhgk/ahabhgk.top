import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = props => {
  const posts = props.data.allMdx?.edges ?? []

  return (
    <Layout>
      {posts.map(({ node }) => {
        return (
          <p key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </p>
        )
      })}
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "post" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
