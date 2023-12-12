import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Delight in our delicious and fun fast food! Enjoy our variety of burgers, fries, and more.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><a href="mailto:hello@fastfoodyum.com">hello@fastfoodyum.com</a></p>
                    <p><a href="tel:+1234567890">123-456-7890</a></p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
