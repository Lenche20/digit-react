import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const Home: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes the scrolling smooth
        });
    };
    const openingTime = "9:00 AM";
    const closingTime = "8:00 PM";
    const workingDays = "Monday to Sunday";
    return (
        <>
            <main className="home-main">
                <section className="home">
                    <div className="parent">
                        <img className="logo" src="https://i.ibb.co/9Gp1nKq/logo.png" alt="Burgermania"/>
                        <div>Skopje's Finest Burger House</div>
                    </div>
                </section>
                <section className="news-part">
                    <div className="news-text">News and Updates</div>
                    <hr/>
                </section>
                <section className="welcome">
                    <div className="part-1">
                        <h2 className="news-title">
                            We have a new burger!
                        </h2>
                        <p>
                            Introducing our mouthwatering Deluxe Burger, a limited-time sensation that's perfect for
                            your cravings. Bite into the succulent prime beef patty, oozing with melted cheddar and
                            Swiss cheese, complemented by fresh tomato slices and crisp lettuce, all hugged by a soft
                            brioche bun. It's burger perfection in every bite. Satisfy your burger desires today!
                        </p>
                    </div>
                    <div className="part-2">
                        <img
                            src="https://imgs.search.brave.com/T8qN-lP69Yxu-zki6GeyQCUFwbTUhPGFJoAcnZfYumU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIw/MjE1MjgxL3Bob3Rv/L2JhY29uLWJ1cmdl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b2VOMXpsRFUw/X0NpWFhiU2FIOXVn/emRVcWFVbWFVWFVK/WG1Mbi1wdzRqTT0"
                            alt="New Burger"/>
                    </div>
                </section>
                <div className='social-media'>Follow us on social media! <img className="sm-icon"
                                                                              src="https://imgs.search.brave.com/PtT84CPJXMQ7jJQ4DaeBik5PoLhi1JXN-kGR5vOVurM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzUtNTQ3MTBf/ZmItaWNvbi1wbmct/ZmFjZWJvb2stbG9n/by1ncmV5LWNpcmNs/ZS5wbmc"
                                                                              alt="facebook"/>
                    <img className="sm-icon"
                         src="https://imgs.search.brave.com/BoF-3hkJZF0XMAxYrQ0bOiYzKB0MvFuKPTy06A3_50s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/ZXMucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL2lj/b25lLXR3aXR0ZXIt/cm9uZGUtZ3Jpc2Uu/cG5n"
                         alt="facebook"/>
                    <img className="sm-icon"
                         src="https://imgs.search.brave.com/jCqZC9oHlv7xgBMsrKs-zZTbCyWx03mxmhlFnn69S5c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy9ncmF5L2luc3Rh/Z3JhbS14eGwucG5n"
                         alt="facebook"/>
                </div>
                <div className="location-section">
                    <div className="location-info">
                        <h2>Location</h2>
                        <p>You can find us in Skopje!</p>
                    </div>
                    <div className="working-hours">
                        <h2>Working Hours</h2>
                        <p>{`${workingDays}: ${openingTime} - ${closingTime}`}</p>
                    </div>
                </div>
                <section className="carousel-part">
                    <Carousel/></section>
                <section className="info">
                    <div className="view-menu-text">Something for everyone</div>
                    <button className="btn-menu-view" onClick={scrollToTop}><Link to="./menu">View Menu</Link></button>
                </section>

            </main>
        </>
    );
};

export default Home;
