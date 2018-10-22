import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Welcome to my site!</h1>
    <div style={{ display: 'flex', flex: 'row' }}>
      <div style={{ fontSize: 20, maxWidth: 800, textAlign: 'center', margin: 'auto' }}>
        <p>Hi! <span role="img" aria-label="hi">👋</span> I'm Muhammad, a full stack engineer from Colombo, Sri Lanka.</p>
        <p>
          I'm a co-founder and lead developer of a WordPress agency called Laccadive IO.
          I'm super passionate about WordPress and React and work with them on a daily basis.
          I'm also a writer, speaker, mentor and open-source contributor.
        </p>
        <p>
          When I'm not coding, you can find me reading, eating out with family and friends or out in 
          parks trying to photograph birds and animals.
        </p>
      </div>
    </div>
    <div style={{ maxWidth: 700, textAlign: 'center', margin: 'auto', marginTop: 10, marginBottom: 10 }}>
      <SocialLink link="https://github.com/m-muhsin/" image="github" />
      <SocialLink link="https://twitter.com/muhsinlk/" image="twitter" />
      <SocialLink link="http://mtwoblog.com/" image="m2blog" />
      <SocialLink link="https://www.smashingmagazine.com/author/muhammad-muhsin/" image="smashing" />
      <SocialLink link="https://www.linkedin.com/in/mmuhsin/" image="linkedin" />
      <SocialLink link="https://www.instagram.com/m_muhsin/" image="instagram" />
    </div>
    <div style={{ maxWidth: 700, textAlign: 'center', margin: 'auto', marginTop: 30 }}>
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
