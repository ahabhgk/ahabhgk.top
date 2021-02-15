import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const { frontmatter, body } = data.mdx

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>{frontmatter.title}</title>
        </Helmet>
      )}
      <h1>{frontmatter.title}</h1>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      <div className="text-right mt-8 text-gray-500">{frontmatter.date}</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      slug
      frontmatter {
        title
        date
      }
      body
    }
  }
`;
