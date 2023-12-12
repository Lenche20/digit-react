import React from "react";

// const Header: React.FC = () => {
//     // @ts-ignore
//     // @ts-ignore
//     // @ts-ignore
//     return (
//
const CardItem = ({ items }: { items: Array<{ id: any; title: any; img: any; price: any; desc: any }> }) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                const { id, title, img, price, desc } = menuItem;
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">N{price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default CardItem;
