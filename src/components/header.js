import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#139FC9',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', }}>
          {siteTitle}
        </Link>
      </h1>
      <div style={{ marginTop: 5 }}>
        <Link to="/" activeClassName="active" className="nav-link">
          Home
        </Link>
        &nbsp;
        <Link to="blog" activeClassName="active" className="nav-link">
          Blog
        </Link>
      </div>
    </div>
  </div>
)

export default Header
