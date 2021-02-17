const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent)
    if (sourceInstanceName === 'posts') {
      const slug = createFilePath({
        node,
        getNode,
      })

      createNodeField({
        node,
        name: 'slug',
        value: `/blog${slug}`,
      })

      createNodeField({
        node,
        name: 'type',
        value: 'post',
      })
    } else if (sourceInstanceName === 'pages') {
      const slug = createFilePath({
        node,
        getNode,
        basePath: 'pages',
      })

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })

      createNodeField({
        node,
        name: 'type',
        value: 'page',
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx(
        filter: {
          frontmatter: { publish: { eq: true } }
          fields: { type: { eq: "post" } }
        }
      ) {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
