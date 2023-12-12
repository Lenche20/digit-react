import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/skopjeinfo.mk/"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/watch?v=lJj0L9rbiI8"><i className="fa fa-youtube"></i></a>
                    <a href="https://twitter.com/CityofSkopje"><i className="fa fa-twitter"></i></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/attractions">Attractions</a></li>
                        <li><a href="/accomodations">Accommodation</a></li>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </div>

                <div className="row">
                    2023 DIGIT - All rights reserved || Designed By: FLI
                </div>
            </div>
        </footer>
    );
};

export default Footer;
