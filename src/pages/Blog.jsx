import React from 'react'
import Img1 from '../assets/handshake.jpeg'
import Img2 from '../assets/home.jpg'

import {FaArrowRight} from 'react-icons/fa'

const Blog = () => {
  return (
    <>
      <div className='about black'>
      <section>
        <h1>
          The story behind our <br /> <span> our company</span>
        </h1>
        <p className='aboutp'>
        Nebo Ascending Ventures is a thrifting contributions and money lending service business. We meet the little
              petty cash needs that comes urgent at little interest for the customer to pay at convenience and spread
              over a time or at a target date to soothe personal and business needs. 
        </p>
        <section>
          <img src={Img2} alt="about" className="about-img" />
        </section>
      </section>
      </div>
      <div className="about">
        <section>
          <div className="numbers">
            <h3>
            Our numbers speak for <br /> <span>themselves</span>
            </h3>
            <div className="grid">
              <div className="item">
                <h4>800<span>K</span></h4>
                <h6>
                Customers
                </h6>
              </div>
              <div className="item">
                <h4>99<span>%</span></h4>
                <h6>
                Customer satisfaction
                </h6>
              </div>
              <div className="item">
                <h4>76<span>%</span></h4>
                <h6>
                  Years over growth
                </h6>
              </div>
              <div className="item">
                <h4>250<span>M</span></h4>
                <h6>
                Current money managed
                </h6>
              </div>
            </div>
          </div>
          <div className="mission">
              <div className="mission-text">
                <h4>Our <span>mission</span></h4>
                <p>
                  To become a microfinance bank that understands and meets both Personal and business needs of the common people right at the Grassroots with a highly motivated and enthusiastic staff. 
                </p>
              </div>
              <br />
              <br />
              <div className="mission-text">
                <h4>Our <span>vision</span></h4>
                <div className='vision-text'>
                  <article>
                    <h4>
                      vision for employee
                    </h4>
                    <p>
                    Providing decent employment for trustworthy, qualified citizens without bias, favouritism or tribalism.  
                    </p>
                  </article>
                  <article>
                    <h4>
                      vision for country
                    </h4>
                    <p>
                    Contributing immensely to providing employment to job seeker in reducing the unemployment rate with the mind for commensurate wages,and minding government legal obligations. 
                    </p>
                  </article>
                  <article>
                    <h4>
                      vision for investors  
                    </h4>
                    <p>
                    Ensuring standard with good profit delivery which investors can be proud of. 
                    </p>
                  </article>
                  <article>
                    <h4>
                      vision for customers  
                    </h4>
                    <p>
                    Maintaining outstanding service delivery with great competitiveness in pricing without compromising standard. 
                    </p>
                  </article>
                </div>
              </div>
            </div>
          <div className="team">
            <h4>
            The amazing team behind <br /> <span>our company</span>
            </h4>
            <div className="team-container">
              <div className="member">
                <img src={Img1} alt='item' />
                <div className='text'>
                  <div>
                  <h6>Sarah Roshi</h6>
                  <p>Chief Inspection Officer</p>
                  </div>
                  <div>
                    <button>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Img1} alt='item' />
                <div className='text'>
                  <div>
                  <h6>Sarah Roshi</h6>
                  <p>Chief Inspection Officer</p>
                  </div>
                  <div>
                    <button>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="member">
                <img src={Img1} alt='item' />
                <div className='text'>
                  <div>
                  <h6>Sarah Roshi</h6>
                  <p>Chief Inspection Officer</p>
                  </div>
                  <div>
                    <button>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Blog