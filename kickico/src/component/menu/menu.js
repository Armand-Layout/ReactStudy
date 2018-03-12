import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './menu.css';

// Типа JSON для меню
const MENU = [
    { name: "Рейтинг проектов", url: "/rating" },
    { name: "Успешные кампании", url: "/campaigns/finished" },
    { name: "Блог", url: "https://medium.com/@danilevski" },
    { name: "Вопросы и ответы", url: "/faq" }
];

class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    {MENU.map((place) => (
                        <li>
                            <Link to={place.url}>
                                {place.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Menu;
