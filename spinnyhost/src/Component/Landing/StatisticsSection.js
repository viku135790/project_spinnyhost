import React from 'react';
import './StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <div className="StatisticsSection">
      <div className="Statistics-Section">
        <div className="statics-detail" >
          <div className="Statics-heading"><p>Our Statistics</p></div>
          <div className="Statics-subheading"><p>Unleash the Power of Data:
            Empowering<br />Insights with Comprehensive Statistics</p></div>
          <div className='Statics-btn'><a href="" className="btn btn-default-yellow-fill mt-5">Learn more</a></div>
        </div>
      
          <div className="Statistics-information">
            <div className="Statistics-client-Section">
              <div className="client-circle">
               <div className='Clients-outside'>
               <div className='Clients-inside'>
                <span>19.322</span>
                </div>
               </div>
              </div>
              <div className="client-circle-heading">Clients</div>
              <div className="client-circle-subheading">
                <p>Clients are individuals or organizations that seek
                  goods or services from a business or service provider.
                  In the context of various industries, including web hosting,
                  clients are the customers who rely on the expertise and
                  offerings of a company to meet their specific needs.
                  Clients may have different requirements, expectations,
                  and objectives, and it is important for businesses to
                  understand and cater to those needs to deliver satisfactory
                  results and build strong client relationships..</p>
              </div>
            </div>
          

        
        
            <div className="Statistics-client-Section">
            <div className="Equipment-circle">
               <div className='Equipment-outside'>
               <div className='Equipment-inside'>
                <span>9.510</span>
                </div>
               </div>
              </div>
              <div className="client-circle-heading">Equipment</div>
              <div className="client-circle-subheading">
                <p> Equipment refers to the tools, machinery, technology, or physical
                  assets used in a business operation or project execution. The specific
                  equipment required can vary greatly depending on the industry or nature
                  of the project. In the case of web hosting, equipment may include servers,
                  networking devices, data storage systems, backup solutions, and other
                  hardware or software infrastructure necessary to provide hosting services.
                  Proper selection, maintenance, and utilization of equipment are essential
                  to ensure smooth operations, performance, and reliability in delivering
                  services to clients..</p>
              </div>
            </div>
        



          
            <div className="Statistics-client-Section">
            <div className="Projects-circle">
               <div className='Projects-outside'>
               <div className='Projects-inside'>
                <span>1231</span>
                </div>
               </div>
              </div>
              <div className="client-circle-heading">Projects</div>
              <div className="client-circle-subheading">
                <p>Projects are temporary endeavors undertaken to achieve
                  specific goals within a defined timeframe and with allocated
                  resources. Projects can vary in scale and complexity,
                  ranging from small internal initiatives to large-scale
                  client engagements. In the context of web hosting, projects
                  may include tasks such as website migrations, server deployments,
                  software upgrades, security enhancements, or custom development
                  projects tailored to meet specific client requirements.
                  Effective project management involves careful planning,
                  resource allocation, task coordination, and monitoring to
                  ensure successful project delivery and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div >


  );
}

export default StatisticsSection;