import React from 'react';
import logo from '../../images/ali.png'
import map from '../../images/map.png'

const Delivery = () => {
    return (
        <div>
            <div className="delivery">
                <div className="total-delivery">
                    <div className="number">
                        <h1>22,800</h1>
                        <p>Al-over delivery by our team</p>
                    </div>
                    <div className="brands">
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="img">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
                <img id="map" src={map} alt=""/>
            </div>
        </div>
    );
};

export default Delivery;