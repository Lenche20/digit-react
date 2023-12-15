import React, {useState} from 'react'
import "./AboutUs.css"

import CardItem from '../CardItem/CardItem';
import items from "../CardItem/menu-data";

type MenuProps = {
    items: {
        title: string
        description: string
    }[]
}

// @ts-ignore
const AboutUs = () => {

    const reviews = [
        {
            name: "Ivan Petrovski",
            rating: "4/5",
            review: "The restaurant has a cozy ambiance, and the meat dishes are really delicious! I particularly enjoyed the steak."
        },
        {
            name: "Elena Stojanovska",
            rating: "5/5",
            review: "Decent place for meat lovers. The barbecue platter was amazing, and the service was great also."
        },
        {
            name: "Nikola Dimitrov",
            rating: "5/5",
            review: "Outstanding experience! The ribs here are fantastic, and the service is top-notch. I'll definitely be back."
        },
        {
            name: "Ana Petrovska",
            rating: "4/5",
            review: "The restaurant has a wonderful ambiance, and their grilled chicken is mouthwatering! I'd definitely recommend it."
        },
        // Add more reviews as needed
    ];
    return (
        <>

            <main className="about-main">
                <section className="about" >
                    <div className="title" >
                        <h2 id="top">About us</h2>
                        <div className="about-underline"></div>
                    </div>
                    <section className="about-welcome">
                        <div className="about-part-1">
                        <span className="about-title">
                           Location: Partizanski Odredi </span>
                            <span>Nestled in the heart of Skopje, our fast food haven awaits at the vibrant intersection of Partizanski Odredi and Debar Maalo. Our location is a buzzing hub where food enthusiasts and casual diners converge. The inviting aroma of our sizzling specialties permeates the area, drawing in passersby with promises of delectable indulgence.      </span></div>
                        <div className="part-2">
                            <img src="https://imgs.search.brave.com/pscqOyD7fe4qLCHKD9UYpVtU9NHj-93tYnBjiJxuYyk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE4ODMy/Mzc4ODQtMjYzZThk/ZTg4NjliP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/T1h4OGNtVnpkR0Yx/Y21GdWRITjhaVzU4/TUh4OE1IeDhmREE9.jpeg" alt="slika"/>
                        </div>
                    </section>
                    <section className="location">
                        <section className="loc-part">

                        </section>
                    </section>

                    <section className="mission">

                        <div className="miss-title">MISSION</div>
                        <div className="miss-text">At Burgeria, our mission is to serve flavorful, high-quality meals prepared with care and creativity. We strive to exceed expectations by delivering exceptional service and creating a welcoming atmosphere for our customers. We are dedicated to fostering community connections and making a positive impact by offering delicious food made from the freshest ingredients while maintaining our commitment to sustainability and customer satisfaction.</div>

                    </section>

                    <section className="values">
                        <h2 className="values-title">VALUES</h2>
                        <div className="values-container">
                            <div className="value-card">
                                <h3 className="value-title">Quality Ingredients</h3>
                                <p>We prioritize using fresh, locally sourced ingredients to create delicious and
                                    wholesome meals for our customers.</p>
                            </div>
                            <div className="value-card">
                                <h3 className="value-title">Exceptional Service</h3>
                                <p>We are committed to providing friendly, efficient, and personalized service to ensure
                                    every customer has a delight.</p>
                            </div>
                            <div className="value-card">
                                <h3 className="value-title">Community Engagement</h3>
                                <p>We actively support and engage with our local community through various initiatives,
                                    partnerships, and events.</p>
                            </div>
                        </div>
                    </section>
                    <section className="reviews">
                        <div className="reviews-header">
                            <h2 className="reviews-title">Reviews of the restaurant</h2>
                            <hr/>
                        </div>
                        <div className="reviews-container">
                            {reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <div className="review-content">
                                        <div className="review-name">{review.name}</div>
                                        <div className="review-rating">{review.rating}</div>
                                        <div className="review-text">{review.review}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </main>

        </>
    );
};

export default AboutUs;
