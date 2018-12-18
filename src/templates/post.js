import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.wordpressPost
    if (!postNode.id) {
      postNode.id = slug
    }
    const date = new Date(postNode.date)
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`
    return (
      <Layout title={postNode.title}>
        <h1
          style={{ marginBottom: 10 }}
          dangerouslySetInnerHTML={{ __html: postNode.title }}
        />
        <div style={{ marginBottom: 20 }}>
          By <b>{postNode.author.name}</b> on <u>{formattedDate}</u>
        </div>
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
