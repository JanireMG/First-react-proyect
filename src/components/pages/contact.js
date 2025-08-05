import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPageImg from '../../../static/assets/contact-img/frieren.png';    

export default function() {
    return (
    <div className="content-page-wrapper">
        <div
            className="left-column"
            style={{
                background: "url(" + contactPageImg + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        />
        <div className="right-column">
            <div className="contact-bullet-points">
                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="phone" />
                    </div>

                    <div className="text">123 456 789</div>
                </div>

                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="envelope" />
                    </div>

                    <div className="text">contact@contact.es</div>
                </div>

                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="map-location-dot" />
                    </div>

                    <div className="text">Calle la Calle, Madrid</div>
                </div>
            </div>
        </div>
    </div>
  );
}