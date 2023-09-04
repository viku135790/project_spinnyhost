

import React, { useState } from 'react';
import './AddonsSection.css';
import { FaCog, FaBolt, FaShieldAlt } from 'react-icons/fa';

const AddonsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="AddonsSection-tabs-item">
            <div class="AddonsSection-img">
              <img class="svg" src="img/controlpanel.svg" alt="monitoring 24/7/365" />
            </div>
            <div className="AddonsSection-row">
              <span>Easy management with cPanel or Plesk</span>
              <p>Effortlessly manage your dedicated server with cPanel,
                providing a user-friendly interface and comprehensive
                tools for streamlined administration and control. </p>
              <p>Simplify server management tasks with Plesk, offering an
                intuitive interface, advanced features, and automated
                functionalities to empower you with easy control over
                your dedicated server.</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="AddonsSection-tabs-item">
            <div class="AddonsSection-img">
              <img class="svg" src="img/performance.svg" alt="performance" />
            </div>
            <div className="AddonsSection-row">
              <span>10x more performance with Bandwidth</span>
              <p>Experience blazing-fast data transfers with
                our dedicated server, offering 10x more performance
                with increased bandwidth, enabling lightning-quick
                downloads, uploads, and seamless streaming.</p>
              <p>Unleash the full potential of your online activities
                with our high-performance dedicated server, providing
                10x more bandwidth, ensuring lightning-speed website
                loading, smoother multimedia streaming, and faster data transfers.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="AddonsSection-tabs-item">
            <div class="AddonsSection-img">
              <img class="svg" src="img/ssl.svg" alt="SSL Certificates" />
            </div>
            <div className="AddonsSection-row">
              <span>Secure browsing experience</span>
              <p>Protect your online presence with our dedicated server,
                delivering a secure browsing experience through robust
                security measures, encrypted connections, and advanced
                firewall protection.</p>
              <p>Ensure peace of mind while browsing with our dedicated
                server, offering a secure environment with SSL/TLS
                encryption, DDoS mitigation, and proactive security
                measures for a worry-free online experience.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="AddonsSection-faq">
      <div className="AddonsSection-container">
        <div className="AddonsSection-head">
          <div className="AddonsSection-heading">
            <h2 className="section-heading">Customise with premium add-ons</h2>
            <p className="section-subheading">Enhance your server experience with our
              customization available with premium add-ons</p>
          </div>
          <div className="AddonsSection-col">
            <div className="AddonsSection-services">
              <div className="AddonsSection-tabs">
                <div className="AddonsSection-tabs-header">
                 
                  <div className={`AddonsSection-icon ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
                    <FaCog size={24} /> <div className="text-white">Control Panel</div>
                  </div>
                  
                  <div className={`AddonsSection-icon ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                    <FaBolt size={24} /> <div className="text-white">Bandwidth</div>
                  </div>
                  
                  <div className={`AddonsSection-icon ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                    <FaShieldAlt size={24} /> <div className="text-white">SSL Certificates</div>
                  </div>
                </div>
                <div className="AddonsSection-tabs-content">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonsSection;


