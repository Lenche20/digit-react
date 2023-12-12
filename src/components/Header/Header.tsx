import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.css";

const Header: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null); // Create a ref for the header element
    const [activeStyle, setActiveStyle] = useState({ width: '0', left: '0' });
    const location = useLocation(); // This hook gives you the current location.

    // Define your nav links as before.
    const navLinks = [
        { path: "/", text: "Home" },
        { path: "/menu", text: "Menu" },
        { path: "/order", text: "Order" },
        { path: "/promotions", text: "Promotions" },
        { path: "/about", text: "About us" },
    ];

    useEffect(() => {
        const updateActiveStyle = () => {
            const activeLinkElement = document.querySelector(`nav a[href='${location.pathname}']`) as HTMLElement;
            if (activeLinkElement) {
                const width = getComputedStyle(activeLinkElement).width;
                const left = activeLinkElement.offsetLeft + 'px';
                setActiveStyle({ width, left });
            }
        };

        updateActiveStyle();
        // Listen to changes in viewport size to update active style
        window.addEventListener('resize', updateActiveStyle);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', updateActiveStyle);
        };
    }, [location]);

    useEffect(() => {
        // Function to update the padding-top value of the next sibling element
        const updatePaddingTop = () => {
            const nextElement = headerRef.current?.nextElementSibling as HTMLElement; // Type assertion here
            if (headerRef.current && nextElement) {
                nextElement.style.paddingTop = `${headerRef.current.offsetHeight}px`;
            }
        };

        updatePaddingTop();
        // Listen for resize events to update padding
        window.addEventListener('resize', updatePaddingTop);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', updatePaddingTop);
        };
    }, []);

    return (
        <header ref={headerRef}> {/* Attach the ref to the header */}
            <nav>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.text}
                        to={link.path}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        {link.text}
                    </NavLink>
                ))}
                <div className="animation" style={activeStyle}></div>
            </nav>
        </header>
    );
};

export default Header;