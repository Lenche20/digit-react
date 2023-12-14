import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <hr/>
            <footer>
                <div className="footer">
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p><Link to="mailto:examplemail@burgeria.com" style={{ color: '#c59d5f' }}>examplemail@burgeria.com</Link></p>
                        <p><Link to="tel:+38971234567" style={{ color: '#c59d5f' }}>+389 73 234 567</Link></p>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul className="social-icons">
                            <li><Link to="https://facebook.com" target="_blank" style={{ color: '#c59d5f' }}>Facebook</Link></li>
                            <li><Link to="https://x.com" target="_blank" style={{ color: '#c59d5f' }}>Twitter</Link></li>
                            <li><Link to="https://instagram.com" target="_blank" style={{ color: '#c59d5f' }}>Instagram</Link></li>
                        </ul>
                    </div>

                    <div className="row">

                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/menu"}>Menu</Link></li>
                            <li><Link to={"/promotions"}>Promotions</Link></li>
                            <li><Link to={"/orders"}>Orders</Link></li>
                            <li><Link to={"/about"}>About us</Link></li>
                        </ul>
                    </div>

                    <div className="row">
                        2023 DIGIT - All rights reserved © || Designed By: Team 9
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
