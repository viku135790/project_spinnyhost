import React, { useState } from 'react'
import "./Header.css";
import { BsSearch, BsWindowDash } from "react-icons/bs";
import { useLazySearchDomainQuery } from '../../features/searchDomainSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchDomain, setSearchDomain] = useState("");
    const [domainSearchResponse , searchDomainResponse] = useLazySearchDomainQuery();
    const navigate = useNavigate();

    const handleSearchDomain = async () => {
        const response = await domainSearchResponse(searchDomain);
        if(response.status == "fulfilled"){
            if(response?.data?.suggestions){
                console.log(response?.data?.suggestions)
                navigate("/SearchedDomain", {state: {data : response.data?.suggestions}})
            }
            
        }
    };


    return (
        <div className="main-container">

            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="vid/header-bg.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="main-heading">
                <div className='first-heading'>
                    <p>Your Perfect</p>
                    <p>Domain Name</p>
                    <p className='head-size'>Search a Domain of Your choice  from <span>389/yr</span></p>
                </div>
                <div class="input-box">
                    <i class="search"></i>
                    <input type="text" placeholder="Search Domain" onChange={(e) => setSearchDomain(e.target.value)} />
                    <button class="button" onClick={handleSearchDomain} > <BsSearch id="use" /></button>
                </div>

            </div>
        </div>




    )
}

export default Header