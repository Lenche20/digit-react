import React from "react";
import "./CardItem.css";

// Assuming 'items' is an array of objects passed as props

const CardItem = ({ items }: { items: Array<{ id: any; title: any; category: any; price: any; img:any; desc: any }> }) => {
    return (
        <div className="section-center">
            {items.map((item) => (
                <article key={item.id} className="menu-item">
                    <figure>
                        <img src=            'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto'
                        alt={item.title} />
                        <figcaption>{item.title}</figcaption>
                    </figure>
                </article>
            ))}
        </div>
    );
};

export default CardItem;
