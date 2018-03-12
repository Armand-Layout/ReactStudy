import React from 'react'
import { Link } from 'react-router-dom'

import './heading.css'

import Menu from '../menu/menu'

const Heading = () => (
    <header className="heading">
        <div className="logo">
            <Link to="/">
                <img src="/assets/img/heading/logo-beta.svg" alt="KICKICO" />
            </Link>
        </div>
        <Menu />
    </header>
);

export default Heading;
