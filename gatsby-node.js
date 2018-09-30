// const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
// const webpackLodashPlugin = require('lodash-webpack-plugin')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
        `
        {
            allWordpressPost {
            edges {
                node {
                id
                slug
                modified
                tags {
                    name
                }
                categories {
                    name
                }
                }
            }
            }
        }
        `
    ).then(result => {
        if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
        }
        const postTemplate = path.resolve(`./src/templates/post.js`)
        result.data.allWordpressPost.edges.forEach(edge => {
            createPage({
                path: `/blog/${edge.node.slug}`,
                component: slash(postTemplate),
                context: {
                    id: edge.node.id
                }
            })
        })
        resolve()
    })
    })
}

// exports.onCreateWebpackConfig = ({ stage, actions }) => {
//   if (stage === 'build-javascript') {
//     actions.setWebpackConfig({
//         plugins: [webpackLodashPlugin],
//     })
//   }
// }
