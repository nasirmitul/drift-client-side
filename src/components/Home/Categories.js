import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className='all-categories'>
            <div className="section-title">
                <p>Product Categories</p>
            </div>
            
            <div className="categories">
                {
                    categories.map(category =>
                        <div className='single-category' key={category._id}>
                            <Link to={`category/${category._id}`}>
                                <img src={category.category_image} alt="" />
                                <h3 className='category-name'>{category.category_name}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;