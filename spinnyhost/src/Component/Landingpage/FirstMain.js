import React from 'react'
import "./FirstMain.css";
import { AiFillCheckCircle, AiOutlineLock } from 'react-icons/ai';  
import { TbWorldCheck } from 'react-icons/tb';
import { FaRegFloppyDisk } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsWordpress, BsFillDatabaseFill } from 'react-icons/bs';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { BiShapeSquare } from 'react-icons/bi';

const FirstMain = () => {
    return (
        <>
            <div className='main-box'>
                {/* first box */}
                <div className='first-box'>
                    <div className='first-box-component'>
                        <div>
                            <img className='first-image-box' src="img/cloudlinux.svg"></img>
                        </div>
                        <div className='first-text'>
                            <p>NEONATE
                            </p>
                            <p>Shared Hosting</p>
                        </div>
                        <div>
                            <i><p className='italic-text'>Starting at:</p></i>
                        </div>
                        <div className='pricing-text'>
                            <p>₹35.00 </p>
                            <p className='price2'>/month</p>
                        </div>
                        <div className='button'>
                            All Plans
                        </div>

                    </div>
                    <div className='first-box-firstcomponent'>
                        <div className='parent-first'>
                            <div className='box1'>
                                {/* <img className="box-image"
                                    src="img/disk.png"></img> */}
                                      <TbWorldCheck />  
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DISK</p>
                                <p>20GB NVME SSD</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <FaRegFloppyDisk /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATA</p>
                                <p>10GB BANDWITH</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <IoSpeedometerOutline />
                            </div>
                            <div className='box2'>
                                <p className='box-color'> EMAIL</p>
                                <p>01 EMAILS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <HiOutlineMailOpen />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>TLD</p>
                                <p>01 DOMAINS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsWordpress /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>WORDPRESS</p>
                                <p>1 CLICK INSTALL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsFillDatabaseFill />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATABBASE</p>
                                <p>2 DATABASE</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <AiOutlineLock /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>SSL CERTIFICATE</p>
                                <p>FREE SSL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BiShapeSquare /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>CPANEL</p>
                                <p>C PANEL</p>
                            </div>
                        </div>

                    </div>
                </div>







                {/* second box */}
                <div className='second-box'>
                    <div className='second-box-firstcomponent'>
                        <div>
                            <img className='first-image-box' src="img/cloudlinux.svg"></img>
                        </div>
                        <div className='first-text'>
                            <p>PREMIUM

                            </p>
                            <p>Shared Hosting</p>
                        </div>
                        <div>
                            <i><p className='italic-text'>Starting at:</p></i>
                        </div>
                        <div className='pricing-text'>
                            <p>₹89.00 </p>
                            <p className='price2'>/month</p>
                        </div>
                        <div className='button'>
                            All Plans
                        </div>
                    </div>

                    <div className='first-box-firstcomponent'>
                        <div className='parent-first'>
                            <div className='box1'>
                            <TbWorldCheck /> 
                            
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DISK</p>
                                <p>20GB NVME SSD</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <FaRegFloppyDisk /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATA</p>
                                <p>10GB BANDWITH</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <IoSpeedometerOutline />
                            </div>
                            <div className='box2'>
                                <p className='box-color'> EMAIL</p>
                                <p>01 EMAILS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <HiOutlineMailOpen />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>TLD</p>
                                <p>01 DOMAINS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsWordpress /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>WORDPRESS</p>
                                <p>1 CLICK INSTALL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsFillDatabaseFill />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATABBASE</p>
                                <p>2 DATABASE</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <AiOutlineLock /> 
                            
                            </div>
                            <div className='box2'>
                                <p className='box-color'>SSL CERTIFICATE</p>
                                <p>FREE SSL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BiShapeSquare /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>CPANEL</p>
                                <p>C PANEL</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* third box */}
                <div className='third-box'>
                    <div className='third-box-firstcomponent'>
                        <div>
                            <img className='first-image-box' src="img/cloudfiber.svg"></img>
                        </div>
                        <div className='first-text'>
                            <p>Cloud
                            </p>
                            <p>Shared Hosting</p>
                        </div>
                        <div>
                            <i><p className='italic-text'>Starting at:</p></i>
                        </div>
                        <div className='pricing-text'>
                            <p>₹399.00 </p>
                            <p className='price2'>/month</p>
                        </div>
                        <div className='button'>
                            All Plans
                        </div>
                    </div>
                    <div className='first-box-firstcomponent'>
                        <div className='parent-first'>
                            <div className='box1'>
                            <TbWorldCheck /> 
                             
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DISK</p>
                                <p>20GB NVME SSD</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <FaRegFloppyDisk />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATA</p>
                                <p>10GB BANDWITH</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <IoSpeedometerOutline />
                            </div>
                            <div className='box2'>
                                <p className='box-color'> EMAIL</p>
                                <p>01 EMAILS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <HiOutlineMailOpen />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>TLD</p>
                                <p>01 DOMAINS</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsWordpress /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>WORDPRESS</p>
                                <p>1 CLICK INSTALL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BsFillDatabaseFill />
                            </div>
                            <div className='box2'>
                                <p className='box-color'>DATABBASE</p>
                                <p>2 DATABASE</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <AiOutlineLock /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>SSL CERTIFICATE</p>
                                <p>FREE SSL</p>
                            </div>
                        </div>

                        <div className='parent-first'>
                            <div className='box1'>
                            <BiShapeSquare /> 
                            </div>
                            <div className='box2'>
                                <p className='box-color'>CPANEL</p>
                                <p>C PANEL</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default FirstMain