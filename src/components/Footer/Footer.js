import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://drift-server.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="single_footer">
                        <h4>Categories</h4>
                        <ul>
                            {
                                categories.map(category =>
                                    <li key={category._id}><Link to={`category/${category._id}`}>
                                        {category.category_name}
                                    </Link></li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="single_footer single_footer_address">
                        <h4>Important Links</h4>
                        <ul>
                            <li><Link>Blogs</Link></li>
                            <li><Link>Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="sub-social">
                        <div className="single_footer single_footer_address">
                            <h4>Connect Now</h4>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                                <li><a href="#"><AiFillInstagram></AiFillInstagram></a></li>
                                <li><a href="#"><AiOutlineTwitter></AiOutlineTwitter></a></li>
                                <li><a href="#"><ImLinkedin2></ImLinkedin2></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="copy-right">
                        <p className="copyright">Copyright © 2022 <a href="#">Drift</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;