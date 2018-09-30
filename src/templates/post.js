import React from 'react'

import Layout from '../components/layout'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.wordpressPost
    if (!postNode.id) {
      postNode.id = slug
    }
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: postNode.title }} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: postNode.content }} />
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query PostById($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
