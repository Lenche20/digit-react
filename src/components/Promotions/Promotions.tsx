import React from 'react';
import "./Promotions.css";

const Promotions = () => {
    return (
        <>
            <main className="promo-main">
                <section className="promo" >
                    <div className="title" >
                        <h2 id="top">Promotions</h2>
                        <div className="promo-underline"></div>
                    </div>


                    <section className="promo-div">

                        <div className="pcontainer">
                            <div>
                                <div className="pcontent">
                                    <h2>Jane Doe</h2>
                                    <span>UI & UX Designer</span>
                                </div>
                            </div>
                            <div>
                                <div className="pcontent">
                                    <h2>Alex Smith</h2>
                                    <span>CEO Expert</span>
                                </div>
                            </div>
                            <div>
                                <div className="pcontent">
                                    <h2>Emily New</h2>
                                    <span>Web Designer</span>
                                </div>
                            </div>

                        </div>
                        <div className="ptext">
                            <div className="pname">Meal Deal Combo</div>
                            <div className="desc">Indulge in our Meal Deal Combo featuring a Classic Beef Burger, a serving of medium fries, and a refreshing Coca-Cola. </div>
                            <div className="pprice">$11.99</div>
                        </div>
                        <div className="pcontainer">
                            <div>
                                <div className="pcontent">
                                    <h2>Jane Doe</h2>
                                    <span>UI & UX Designer</span>
                                </div>
                            </div>
                            <div>
                                <div className="pcontent">
                                    <h2>Alex Smith</h2>
                                    <span>CEO Expert</span>
                                </div>
                            </div>
                            <div>
                                <div className="pcontent">
                                    <h2>Emily New</h2>
                                    <span>Web Designer</span>
                                </div>
                            </div>

                        </div>
                        <div className="ptext">
                            <div className="pname">Meal Deal Combo</div>
                            <div className="desc">Indulge in our Meal Deal Combo featuring a Classic Beef Burger, a serving of medium fries, and a refreshing Coca-Cola. </div>
                            <div className="pprice">$11.99</div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
};

export default Promotions;
