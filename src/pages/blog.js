import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = (props) => (
  <Layout>
    <h1>Blog</h1>
    <p>Welcome to the blog page! Here, you will see posts pulled in from&nbsp;
      <a rel="noopener noreferrer" target="_blank" href="http://mtwoblog.com/">my blog</a>.
    </p>
      {
        props.data && 
        props.data.allWordpressPost.edges.map(edge => (
            <div key={edge.node.id}>
              <Link style={{ color: '#15A9D6', textDecoration: 'none' }} to={`blog/${edge.node.slug}`}>
                <h3 dangerouslySetInnerHTML={{ __html: edge.node.title }} />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt.replace(/<a(.*?)<\/a>/g, "") }} />
            </div>
        ))
      }
  </Layout>
)

export default Blog

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          author {
            name
            avatar_urls {
              wordpress_24
              wordpress_48
              wordpress_96
            }
          }
          date
          slug
          title
          modified
          excerpt
          id
          categories {
            name
          }
          tags {
            name
          }
          content
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`