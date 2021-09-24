import React, { FunctionComponent } from 'react';

interface Props {
    filterItems: (category: string) => void;
    categories: string[];
}

const Categories: FunctionComponent<Props> = ({ filterItems, categories }) => {
    return <div className="btn-container">
        {categories.map((category, index) => <button key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>)}
    </div>;
};

export default Categories;