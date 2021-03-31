const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// We'll need something for creating the slugs
const slugify = require(`slugify`)
const slugifyOptions = {
  replacement: "-",
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true,
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulProjects(limit: 1000) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/projects.js`)
      _.each(result.data.allContentfulProjects.edges, edge => {
        createPage({
          path: `/${slugify(edge.node.title, slugifyOptions)}/`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}
