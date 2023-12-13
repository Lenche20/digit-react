import React from "react";
import "./Home.css"
import {Router} from "react-router-dom";

import { Link } from 'react-router-dom';
import Categories from "../Menu/Categories";
import CardItem from "../CardItem/CardItem";
const Home: React.FC = () => {
    return (
        <>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>Royal burgers</h2>
                        <div className="underline"></div>
                    </div>

                </section>
            </main>

        </>
    );
};

export default Home;
