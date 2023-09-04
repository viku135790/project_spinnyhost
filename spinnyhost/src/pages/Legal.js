


import React, { useState } from 'react';
import './Legal.css';
import Affiliate from '../Component/Legal/Affiliate';
import Legall from '../Component/Legal/Legall';
import CookieStatement from '../Component/Legal/CookieStatement';
import PrivacyPolicy from '../Component/Legal/PrivacyPolicy';
import ServersPolicies from '../Component/Legal/ServersPolicies';
import NavLegal from '../Component/Legal/NavLegal';
import { RiSearchLine } from 'react-icons/ri';


const Legal = () => {
    window.scrollTo(0, 0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleMenuClick = (option) => {
        setSelectedOption(option);
    };

    let content = '';

    switch (selectedOption) {
        case 'AllGeneralTerms':
            content =
                <div className="AllGeneral-Terms-main">
                     {<ServersPolicies />}
                    {<PrivacyPolicy />}
                    {<CookieStatement />}
                    {<Legall />}
                    {<Affiliate />}




                </div>

            break;
        case 'ServersPolicies':
            content = <div>{<ServersPolicies />}</div>;
            break;
        case 'PrivacyPolicy':
            content = <div>{<PrivacyPolicy />}</div>;
            break;
        case 'CookieStatement':
            content = <div>{<CookieStatement />}</div>;
            break;
        case 'Legal':
            content = <div>{<Legall />}</div>
            break;
        case 'AffiliateStatus':
            content = <div>{<Affiliate />}</div>; break;
        default: content = 'Select an option from the sidebar.';
    }

    return (
        <>
       <NavLegal/>
        <div className="legalcontainer">
            <div className="legal-container">
                <div className="Legal-header">
                    <div className="Legalheader">
                        <p>General Terms And Conditions</p>
                        <div className="Legal-search-container">
                            <input type="text" className="search-input" placeholder="Search..." />
                            <button className="search-button"><RiSearchLine /></button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-content">
                    <div className="sidebarcontent">
                        <div className="sidebar">
                            <span>Terms</span>
                            <hr />
                            <div className="menu-option" onClick={() => handleMenuClick('AllGeneralTerms')}>All General Terms</div>
                            <div className="menu-option" onClick={() => handleMenuClick('ServersPolicies')}>Servers Policies</div>
                            <div className="menu-option" onClick={() => handleMenuClick('PrivacyPolicy')}>Privacy Policy</div>
                            <div className="menu-option" onClick={() => handleMenuClick('CookieStatement')}>Cookie Statement</div>
                            <div className="menu-option" onClick={() => handleMenuClick('Legal')}>Legal</div>
                            <div className="menu-option" onClick={() => handleMenuClick('AffiliateStatus')}>Affiliate Status</div>
                        </div>
                        <div className="content-wrapper">
                            <div className="content">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Legal;