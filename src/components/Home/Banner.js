import React from 'react';
import banner_img from '../../images/banner_img.png'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-left">
                <h1 className="title">Shop Everyday. <br /> Every week.</h1>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iure unde tempore nulla sunt soluta.</p>
                <button className="custom-button-gr">Check Update</button>
            </div>
            <div className="banner-right">
                <img src={banner_img} alt="" />
            </div>
        </div>
    );
};

export default Banner;