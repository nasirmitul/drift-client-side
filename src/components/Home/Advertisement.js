import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const Advertisement = () => {

    const [advertises, setAdvertises] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAdvertises(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "60px",
    };

    console.log("add", advertises);


    return (
        <div className={`advertisement-items ${advertises.length > 0 ? 'show-advertise' : 'hide-advertise'}` }>
            <div className="section-title">
                <p>Advertisement</p>
            </div>

            <div className="advertisement">
                <div>
                    <Slider {...settings}>
                        {
                            advertises.map(item =>
                                <div key={item._id}>
                                    <img className='advertise-img' src={item.product_image} alt="" />
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;