import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>Contact me!</h1>
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default ContactPage
