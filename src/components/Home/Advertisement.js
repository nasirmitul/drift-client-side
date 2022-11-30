import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios'

const Advertisement = () => {

    const [advertises, setAdvertises] = useState([]);
    useEffect(() => {
        /* fetch('https://drift-server.vercel.app/advertise')
            .then(res => res.json())
            .then(data => setAdvertises(data)) */

            axios.get('https://drift-server.vercel.app/advertise')
            .then(data => {setAdvertises(data.data)})
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
        <div className={`advertisement-items container ${advertises.length > 0 ? 'show-advertise' : 'hide-advertise'}` }>
            <div className="section-title">
                <p>Advertisement</p>
            </div>

            <div className="advertisement">
                <div>
                    <Slider {...settings}>
                        {
                            advertises.map(item => item.paid ||
                                <div key={item._id}>
                                    <img className='advertise-img' src={item.product_image} alt="" />
                                </div>
                            ).reverse()
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;