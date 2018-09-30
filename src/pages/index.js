import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Welcome to my site!</h1>
    <div style={{ display: 'flex', flex: 'row' }}>
      <div style={{ maxWidth: 500, textAlign: 'center', margin: 'auto' }}>
        <p>
          I am a Full Stack Engineer specializing in WordPress and React.
          Currently, I am a co-founder of a WordPress agency called Laccadive IO, where I lead development.
          I'm also a speaker, writer, mentor and educator. 
        </p>
      </div>
    </div>
    <div style={{ maxWidth: 700, textAlign: 'center', margin: 'auto', marginTop: 50 }}>
      <SocialLink link="https://github.com/m-muhsin/" image="github" />
      <SocialLink link="https://twitter.com/muhsinlk/" image="twitter" />
      <SocialLink link="http://mtwoblog.com/" image="wordpress" />
      <SocialLink link="https://www.smashingmagazine.com/author/muhammad-muhsin/" image="smashing" />
      <SocialLink link="https://www.linkedin.com/in/mmuhsin/" image="linkedin" />
      <SocialLink link="https://www.instagram.com/m_muhsin/" image="instagram" />
    </div>
    <div style={{ maxWidth: 700, textAlign: 'center', margin: 'auto', marginTop: 50 }}>
      <p>If this site looks basic, that's because I built it in three hours.</p>
      <p>I have open sourced the site on <a rel="noopener noreferrer" target="_blank" href="https://github.com/m-muhsin/muhammad-muhsin/">GitHub</a> in case you want to check it out.</p>
    </div>
  </Layout>
)

const SocialLink = ({ link, image }) => (
    <a style={{ width: 100, display: 'inline-block' }} rel="noopener noreferrer" target="_blank" href={link} >
      <img style={{ width: 75, height: 75, textAlign: 'center' }} alt={image} src={ require( `../images/${image}.png`) } />
    </a>
)

export default IndexPage
