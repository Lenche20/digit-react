import React from 'react'
import "./Menu.css"


type MenuProps = {
    items: {
    title: string
        description: string
    }[]
}

// @ts-ignore
// const Menu = ({ items }: MenuProps) =>{
//
//    // return <CardItem/>
//    //
//    //  return {items.map(e => <CardItem title={e.title} description={e.description} />)}
//
// }





const Menu: React.FC = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>

            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    {/*<Categories categories={categories} filterItems={filterItems} />*/}
                    {/*<Menu />*/}
                </section>
            </main>

        </>
    );
};

export default Menu;
