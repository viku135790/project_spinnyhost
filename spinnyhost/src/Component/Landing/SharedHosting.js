import React, { useState } from 'react';
import './SharedHosting.css';
import { AiFillCheckCircle, AiOutlineLock } from 'react-icons/ai';
import { TbWorldCheck } from 'react-icons/tb';
import { FaRegFloppyDisk } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsWordpress, BsFillDatabaseFill } from 'react-icons/bs';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { BiShapeSquare } from 'react-icons/bi';

const SharedHosting = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const togglePeriod = () => {
    setIsAnnually(prevState => !prevState);
  };

  return (
    <>

      <div className="shared-hosting">
        <div className="heading-shared">
          <p className="main-heading-shared">Neonate Shared Hosting</p>
          <p className="subheading">Blazing fast & stable hosting infrastructure</p>


          <div className="switch-container">
            <span className="left-text">Monthly</span>
            <label className="switch">
              <input type="checkbox" onChange={togglePeriod} checked={isAnnually} />
              <span className="slider"></span>
            </label>
            <span className="right-text">Annual</span>
          </div>
          





        </div>


        <div className="included-all">
          <div className="included">
            <div className="included-list" >
              <h4>All plans include</h4>
              <div><AiFillCheckCircle /> c-Panel</div>
              <div><AiFillCheckCircle /> Email</div>
              <div><AiFillCheckCircle /> Free SSL certificate</div>
              <div><AiFillCheckCircle /> Redundant DNS</div>
              <div><AiFillCheckCircle /> Powerful SSD</div>
              <div><AiFillCheckCircle /> Support 24/7/365</div>
            </div>
          </div>


          {/* PRICING TABLES */}

          <div className="pricing-tables">
            {/* Neonate Primary */}

            <div className="pricing-card">
              <div className="top-content">
                <div className="pricing-row">
                  <div className="svg-icon" >
                    <img src="img/cloudlinux.svg" alt="" />
                  </div>
                  <div className="plan-title">Neonate Primary</div>
                  <div className="plan-description">Best for one Website</div>
                  <div className="price">
                    <sup className="currency">₹</sup>
                    <span className="value">{isAnnually ? '420.00' : '35.00'}</span>
                    <small>/</small>
                    <span className="period">{isAnnually ? 'Yearly' : 'Monthly'}</span>
                  </div>

                  <a href="https://spinnyhost.com/dashboard/store/neonate-share-hosting/neonate-primary" className="btn btn-default-yellow-fill">
                    Order now
                  </a>
                </div>
              </div>
              <div className="plan-features">
                <div className="plan-list">
                  <div className='list-items'><div><TbWorldCheck />        </div><div className='listing'>Website<p>One Website</p></div></div>
                  <div className='list-items'><div><FaRegFloppyDisk />     </div><div className='listing'>DISK {isAnnually ? '240GB' : '20GB'} <p>NVMe SSD</p></div></div>
                  <div className='list-items'><div><IoSpeedometerOutline /></div><div className='listing'>DATA {isAnnually ? '120GB' : '10GB'} <p>Bandwidth</p></div></div>
                  <div className='list-items'><div><HiOutlineMailOpen />   </div><div className='listing'> {isAnnually ? '12' : '01'}EMAIL<p>Emails</p></div></div>
                  <div className='list-items'><div><BsWordpress />         </div><div className='listing'>Wordpress<p>1-Click Install</p></div></div>
                  <div className='list-items'><div><BsFillDatabaseFill />  </div><div className='listing'> {isAnnually ? '24' : '2'} Database  <p>Database</p></div></div>
                  <div className='list-items'><div><AiOutlineLock />       </div><div className='listing'>SSL Certificate<p>Free SSL</p></div></div>
                  <div className='list-items'><div><BiShapeSquare />       </div><div className='listing'>CPanel<p>CPanel</p></div></div>
                </div>
              </div>
            </div>


            {/* Neonate Medium */}
            <div className="pricing-card">
              <div className="top-content">
                <div className="pricing-row">
                  <div className="svg-icon" >
                    <img src="img/cloudlinux.svg" alt="" />
                  </div>
                  <div className="plan-title">Neonate Medium</div>
                  <div className="plan-description">Best for one Website</div>
                  <div className="price-content">
                    <div className="price">
                      <sup className="currency">₹</sup>
                      <span className="value">{isAnnually ? '660.00' : '55.00'}</span>
                      <small>/</small>
                      <span className="period">{isAnnually ? 'Yearly' : 'Monthly'}</span>
                    </div>
                  </div>
                  <a href="https://spinnyhost.com/dashboard/store/neonate-share-hosting/neonate-primary" className="btn btn-default-yellow-fill">
                    Order now
                  </a>
                </div>
              </div>
              <div className="plan-features">
                <div className="plan-list">
                  <div className='list-items'><div><TbWorldCheck />        </div><div className='listing'>Website<p>One Website</p ></div></div>
                  <div className='list-items'><div><FaRegFloppyDisk />     </div><div className='listing'>DISK {isAnnually ? '360GB' : '30GB'} <p>NVMe SSD</p></div></div>
                  <div className='list-items'><div><IoSpeedometerOutline /></div><div className='listing'>DATA {isAnnually ? '240GB' : '20GB'} <p>Bandwidth</p></div></div>
                  <div className='list-items'><div><HiOutlineMailOpen />   </div><div className='listing'>{isAnnually ? '24' : '02'} EMAIL <p>Emails</p></div></div>
                  <div className='list-items'><div><BsWordpress />         </div><div className='listing'>Wordpress<p>1-Click Install</p></div></div>
                  <div className='list-items'><div><BsFillDatabaseFill />  </div><div className='listing'> {isAnnually ? '48' : '4'} Database <p>Database</p></div></div>
                  <div className='list-items'><div><AiOutlineLock />       </div><div className='listing'>SSL Certificate<p>Free SSL</p></div></div>
                  <div className='list-items'><div><BiShapeSquare />       </div><div className='listing'>CPanel<p>CPanel</p> </div></div>
                </div>
              </div>
            </div>


            {/* Neonate Large */}
            <div className="pricing-card">
              <div className="top-content">
                <div className="pricing-row">

                  <div className="svg-icon" >
                    <img src="img/cloudlinux.svg" alt="" />
                  </div>
                  <div className="plan-title">Neonate Large</div>
                  <div className="plan-description">Best for one Website</div>
                  <div className="price-content">
                    <div className="price">
                      <sup className="currency">₹</sup>
                      <span className="value">{isAnnually ? '900.00' : '75.00'}</span>
                      <small>/</small>
                      <span className="period">{isAnnually ? 'Yearly' : 'Monthly'}</span>
                    </div>
                  </div>
                  <a href="https://spinnyhost.com/dashboard/store/neonate-share-hosting/neonate-primary" className="btn btn-default-yellow-fill">
                    Order now
                  </a>
                </div>
              </div>
              <div className="plan-features">
                <div className="plan-list">
                  <div className='list-items'><div><TbWorldCheck />        </div><div className='listing'>Website<p>One Website</p> </div></div>
                  <div className='list-items'><div><FaRegFloppyDisk />     </div><div className='listing'>DISK {isAnnually ? '600GB' : '50GB'}  <p>NVMe SSD</p> </div></div>
                  <div className='list-items'><div><IoSpeedometerOutline /></div><div className='listing'>DATA {isAnnually ? '420GB' : '35GB'} <p>Bandwidth</p> </div></div>
                  <div className='list-items'><div><HiOutlineMailOpen />   </div><div className='listing'> {isAnnually ? '60' : '05'} EMAIL<p>Emails</p></div></div>
                  <div className='list-items'><div><BsWordpress />         </div><div className='listing'>Wordpress<p>1-Click Install</p></div></div>
                  <div className='list-items'><div><BsFillDatabaseFill />  </div><div className='listing'> {isAnnually ? '96' : '8'} Database <p>Database</p></div></div>
                  <div className='list-items'><div><AiOutlineLock />       </div><div className='listing'>SSL Certificate<p>Free SSL</p> </div></div>
                  <div className='list-items'><div><BiShapeSquare />       </div><div className='listing'>CPanel  <p>CPanel</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SharedHosting;

