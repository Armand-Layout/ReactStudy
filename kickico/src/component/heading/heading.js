import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './heading.css'

import Menu from './menu/menu'
import HeadingSocial from './social/social'
import HeadingLang from './lang/lang'
import HeadingUser from './user/user'

class Heading extends Component {
  render() {
    return (
      <header className="heading">
        <div className="heading-left">
          <div className="logo">
            <Link to="/">
              <img src="/assets/img/heading/logo-beta.svg" alt="KICKICO" />
            </Link>
          </div>
          <Menu />
        </div>
        <div className="heading-right">
          <HeadingSocial />
          <HeadingLang />
          <HeadingUser />
        </div>
      </header>
    )
  }
}

export default Heading;
