import React from 'react';
import banner_img from '../../images/banner_img.png'
const Banner = () => {
    return (
        <div className='banner container'>
            <div className="banner-left">
                <h1 className="title">Buy your dream car <br /> in your reasonable budget</h1>
                <p className='description'>Looking for your dream car in a reasonable price? Have a quick look at and select you car now.</p>
                <button className="custom-button-gr">All Cars</button>
            </div>
            <div className="banner-right">
                <img src={banner_img} alt="" />
            </div>
        </div>
    );
};

export default Banner;