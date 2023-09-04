

import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <div className="FeaturesContainer">
            <div className="Features-Container">
                <div className="FeaturesContainer-row">
                    <div className="FeaturesContainer-info-content">
                        <div className="FeaturesContainer-content">
                            <span>SO Installation</span>
                            <p>Empowering Your Digital Domain: Seamless Dedicated Server Installations for Unmatched Performance</p>
                            <p>Installing a dedicated server requires meticulous attention to detail and a systematic approach. From setting up the hardware components to configuring the network, installing the operating system, and implementing robust security measures, each step plays a vital role in ensuring a smooth and efficient installation. Additionally, deploying essential server management tools, fine-tuning application settings, and conducting thorough testing and optimization are crucial for maximizing performance and maintaining a secure environment. By following a comprehensive installation process, you can establish a reliable and powerful dedicated server that meets your specific requirements and empowers your digital endeavors.</p>
                        </div>
                    </div>
                    <div className="FeaturesContainer-img">
                        <img className="svg" src="img/os.svg" alt="" />
                    </div>
                </div>


                <div className="FeaturesContainer-row">
                    <div className="FeaturesContainer-info-content">
                        <div className="FeaturesContainer-content">
                            <span>Maximum Performance</span>
                            <p>Unlock the true potential of your applications with our dedicated server, featuring lightning-fast SSD storage, robust CPU power, and optimized network connectivity for unmatched performance and responsiveness.</p>
                            <p>Experience blazing-fast speeds and seamless connectivity with our dedicated server, powered by high-speed network connections and cutting-edge hardware for maximum performance..</p>
                        </div>
                    </div>
                    <div className="FeaturesContainer-img">
                        <img className="svg" src="img/ssd.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
