import React from 'react';
import './DedicatedServers.css';

const DedicatedServers = () => {
    return (
        <div className='DedicatedServers'>
            <div className='dead-head'>
                <div className='dead-main'>
                    <div className='dead-content'>
                        <p className='dead-first'>Dedicated Servers</p>
                        <p className='dead-sec'>High performance dedicated servers with cloud flexibility and scalability.</p>
                    </div>
                </div>
            </div>
            <div className='sec-dedicated'>
                <div className='sec-dedicated-main'>
                    <div className='sec-deicated-header'>
                        <div className='sec-deicated-first'>
                            <p>Choose Server</p>

                            <div className='ded-data'>
                                <label>
                                    <input
                                        type="radio"
                                    />
                                    All Servers
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                    />
                                    Linux
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                    />
                                    Windows
                                </label>
                            </div>
                        </div>

                        <div className="dedicated-select">
                            <p>Location</p>
                            <select className="dedicated-filter" >
                                <option value="all">Select Payment Method</option>
                                <option value=".data1">Pay by Bank Transfer</option>
                                <option value=".data2">Pay with Paypal</option>
                                <option value=".data3">Pay by Check</option>
                            </select>
                        </div>
                    </div>

                    <div className='sec-deicated-header'>
                        <div className='sec-deicated-first'>
                            <p>Choose Server</p>

                            <div className='ded-data'>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    4
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    6
                                </label>

                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    8
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    12
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    16
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    32
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                    />
                                    64
                                </label>
                            </div>
                        </div>

                        <div className="dedicated-select">
                            <p>Location</p>
                            <div className="dedicated-select-input">
                                <input type="range" />
                                <input type="range" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DedicatedServers;