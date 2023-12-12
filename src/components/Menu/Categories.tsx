import React from 'react'

// @ts-ignore
const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories