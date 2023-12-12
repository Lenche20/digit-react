import React, { useEffect, useState } from "react";
import items from "./data";

type ItemType = {
    title: string;
    desc: string; // Adjusted to match the data structure
    img: string; // Adjusted to match the data structure
};

type FoodPopUpProps = {
    item: ItemType;
};

const FoodPopUp: React.FC<FoodPopUpProps> = ({ item }) => {
    const [selectedAttraction, setSelectedAttraction] = useState<ItemType | undefined>(undefined);

    useEffect(() => {
        setSelectedAttraction(item);
    }, [item]);

    const onClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        // Handle close logic here
    };

    return (
        <div className="popup" id="popup">
            <div className="popup-inner">
                <div className="popupphoto">
                    <img src={item.img} alt="" />
                </div>
                <div className="popuptext">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
                <a className="popup__close" href="../attractions/" onClick={onClose}>
                    X
                </a>
            </div>
        </div>
    );
};

export default FoodPopUp;
