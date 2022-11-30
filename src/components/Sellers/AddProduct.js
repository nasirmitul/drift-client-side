import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [categoryData, setCategoryData] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/singleCategory/${categoryId}`)
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [categoryId])


    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);


    const handleChange = e => {
        setCategoryId(e.target.value)
        console.log(e.target.name);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.name.value;
        const product_image = form.image.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const years_used = form.year.value;
        const description = form.description.value;
        const condition = form.condition.value;


        const addProduct = {
            product_image,
            product_name,
            location,
            resale_price,
            original_price,
            years_used,
            seller_name: user?.displayName,
            seller_email: user?.email,
            phone,
            description,
            condition,
            product_category: categoryData[0].category_name,
            category_id: categoryId,
            time: new Date(), 
            f_user_id: user?.uid
        }

        console.log('myOrder', addProduct);


        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product added successfully");
                    navigate('/dashboard/myProduct');
                }
                console.log(data);
            })
    }


    return (
        <div className='container add-product'>
            <div className="add-product-form">
                <form action="" onSubmit={handleSubmit}>
                    <h2 className='heading'>Add A Product</h2>

                    <div className="inputs">

                        <input type="text" placeholder='Product Name' name='name' required />
                        <input type="text" placeholder='Product Image URL' name='image' required />
                        <input type="number" placeholder='Product Resale Price' name='resale_price' required />
                        <input type="number" placeholder='Product Original Price' name='original_price' required />
                        <input type="tel" placeholder='Phone Number' name='phone' required />
                        <input type="text" placeholder='Location' name='location' required />
                        <input type="number" placeholder='Year Used?' name='year' required />
                        <textarea name="description" id="description" placeholder='Description' required></textarea>


                        <div className="conditions">
                            <p className='condition-title'>Product Condition</p>
                            <div className="condition">
                                <div className="excellent">
                                    <input type="radio" name="condition" value="excellent" id='excellent' required />
                                    <label htmlFor="excellent">Excellent</label>
                                </div>
                                <div className="good">
                                    <input type="radio" name="condition" value="good" id='good' required />
                                    <label htmlFor="good">Good</label>
                                </div>
                                <div className="fair">
                                    <input type="radio" name="condition" value="fair" id='fair' required />
                                    <label htmlFor="fair">Fair</label>
                                </div>
                            </div>

                        </div>

                        <div className="categories">
                            <p className='category-title'>Product Category</p>
                            <select className='category' onChange={handleChange} name="category" id="">
                                {
                                    categories.map(category =>
                                        <option key={category._id} value={category._id} name="product_category" required>{category?.category_name}</option>
                                    )
                                }
                            </select>
                        </div>


                    </div>

                    <div className="action-button">
                        <button className='custom-button' type='submit'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;