import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="single_footer">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Simply dummy text</a></li>
                            <li><a href="#">The printing and typesetting </a></li>
                            <li><a href="#">Standard dummy text</a></li>
                            <li><a href="#">Type specimen book</a></li>
                        </ul>
                    </div>
                    <div className="single_footer single_footer_address">
                        <h4>Important Links</h4>
                        <ul>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Simply dummy text</a></li>
                            <li><a href="#">The printing and typesetting </a></li>
                            <li><a href="#">Standard dummy text</a></li>
                            <li><a href="#">Type specimen book</a></li>
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