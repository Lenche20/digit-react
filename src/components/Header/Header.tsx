import React from "react";
import "./Header.css"
import Menu from '../Menu/Menu';

import Error from '../Error/Error';
import {Router} from "react-router-dom";

import { Link } from 'react-router-dom';
const Header: React.FC = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>

                <Link to="/error">Order</Link>
                <Link to="/home">Promotions</Link>
                <Link to="/home">About us</Link>


                <div className="animation start-home"></div>
            </nav>
        </>
    );
};// Assuming your CSS file is named footer.css

export default Header;
