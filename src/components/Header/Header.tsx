import React from "react";
import "./Header.css"
import {Router} from "react-router-dom";

import { Link } from 'react-router-dom';
const Header: React.FC = () => {
    return (
        <>
            <h1>Kao i da se vika restoranot</h1>

            <nav>
                <a href="#">Home</a>
                <Link to="./Menu">Menu</Link>
                <a href="#">Order</a>
                <a href="#">Promotions</a>
                <a href="#">Contact</a>
                <div className="animation start-home"></div>
            </nav>
        </>
    );
};

export default Header;
