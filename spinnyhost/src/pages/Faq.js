

import React, { useState } from 'react';
import './Faq.css';
import SharedHosting from '../Component/FAQ/SharedHosting';
import CloudReseller from '../Component/FAQ/CloudReseller';
import DedicatedServers from '../Component/FAQ/DedicatedServers';
import SSLCertificates from '../Component/FAQ/SSLCertificates';
import CloudVPS from '../Component/FAQ/CloudVPS';
import { RiSearchLine } from 'react-icons/ri';
import NavFAQ from '../Component/FAQ/NavFAQ';

const Faq = () => {
    window.scrollTo(0, 0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleMenuClick = (option) => {
        setSelectedOption(option);
    };

    let contents = '';

    switch (selectedOption) {
        case 'AllAnswers':
            contents =
                <div className="All-Answers">
                    {<SharedHosting />}
                    {<CloudReseller />}
                    {<DedicatedServers />}
                    {<SSLCertificates />}
                    {<CloudVPS />}
                </div>

            break;
        case 'SharedHosting':
            contents = <div>{<SharedHosting />}</div>;
            break;
        case 'CloudReseller':
            contents = <div>{<CloudReseller />}</div>;
            break;
        case 'DedicatedServers':
            contents = <div>{<DedicatedServers />}</div>;
            break;
        case 'SSLCertificates':
            contents = <div>{<SSLCertificates />}</div>
            break;
        case 'CloudVPS':
            contents = <div>{<CloudVPS />}</div>; break;
        default: contents = 'Select an option from the sidebar.';
    }

    return (
        <>
        <NavFAQ/>
        <div className="Faqcontainer">
            <div className="Faq-container">
                <div className="Faq-header">
                   <div className="Faqheader">
                        <p>Frequently Asked Questions</p>
                        <div className="Faq-search-container">
                            <input type="text" className="Faq-search-input" placeholder="Search..." />
                            <button className="Faq-search-button"><RiSearchLine /></button>
                        </div>
                    </div>
                </div>
                <div className="Faq-sidebar-content  check-sec-img">
                    <div className="Faq-sidebarcontent">
                        <div className="Faq-sidebar">
                            <span>Terms</span>
                            <hr />
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('AllAnswers')}>All Answers</div>
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('SharedHosting')}>Shared Hosting</div>
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('CloudReseller')}>Cloud Reseller</div>
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('DedicatedServers')}>Dedicated Servers</div>
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('SSLCertificates')}>SSL Certificates</div>
                            <div className="Faq-menu-option" onClick={() => handleMenuClick('CloudVPS')}>Cloud VPS</div>
                        </div>
                        <div className="Faq-content-wrapper">
                            <div className="Faq-content">
                                {contents}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default Faq;