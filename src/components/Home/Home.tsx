import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const Home: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes the scrolling smooth
        });};
    return (
        <>
            <main className="home-main">
                <section className="home">
                    <div className="title">
                        <h2>Burgeria</h2>
                        <div className="home-underline"></div>
                    </div>
                    <div>
                        <img className="logo" src="https://imgs.search.brave.com/oUacXwuXIuPH4wEVxh2BrF-grNHkt7RbJz1g1lZV11k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzk2LzUyLzIz/LzM2MF9GXzM5NjUy/MjM1OV95UDB3T0lV/Z21ONWlYMExmR0VE/QUJMcTY1UHphRkZ0/NC5qcGc" alt="Burgermania"/>
                    <div>Best Burger in Skopje</div>
                    </div>

                </section>
                <section className="news-part">
                    <div className="news-text">News and Updates</div><hr/>
                </section>
                <section className="welcome">
                    <div className="part-1">
                        <span className="news-title">
                            We have a new burger! </span>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, buLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </span></div>
                    <div className="part-2">
                        <img src="https://imgs.search.brave.com/T8qN-lP69Yxu-zki6GeyQCUFwbTUhPGFJoAcnZfYumU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIw/MjE1MjgxL3Bob3Rv/L2JhY29uLWJ1cmdl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b2VOMXpsRFUw/X0NpWFhiU2FIOXVn/emRVcWFVbWFVWFVK/WG1Mbi1wdzRqTT0" alt="slika"/>
                    </div>
                </section>

                <div>Follow us on social media! <img className="sm-icon" src="https://imgs.search.brave.com/PtT84CPJXMQ7jJQ4DaeBik5PoLhi1JXN-kGR5vOVurM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzUtNTQ3MTBf/ZmItaWNvbi1wbmct/ZmFjZWJvb2stbG9n/by1ncmV5LWNpcmNs/ZS5wbmc" alt="facebook"/>
                <img className="sm-icon" src="https://imgs.search.brave.com/BoF-3hkJZF0XMAxYrQ0bOiYzKB0MvFuKPTy06A3_50s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/ZXMucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL2lj/b25lLXR3aXR0ZXIt/cm9uZGUtZ3Jpc2Uu/cG5n" alt="facebook"/>
                <img className="sm-icon" src="https://imgs.search.brave.com/jCqZC9oHlv7xgBMsrKs-zZTbCyWx03mxmhlFnn69S5c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvcHJldmll/dy9ncmF5L2luc3Rh/Z3JhbS14eGwucG5n" alt="facebook"/>
            </div>
                <div><div className="lokacija">Location<br/> You can find us in Skopje!<br/><br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div></div>                <section className="carousel-part">
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
