import React from 'react'
import Img1 from '../assets/logo.webp'

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fuga mollitia possimus soluta vero eum sunt praesentium voluptatem pariatur dicta.
        </p>
        <img src={Img1} alt="about" />
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
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="item">
                <h4>99<span>%</span></h4>
                <h6>
                Customer satisfaction
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="item">
                <h4>76<span>%</span></h4>
                <h6>
                  Years over growth
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </div>
              <div className="item">
                <h4>250<span>B</span></h4>
                <h6>
                Current money managed
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
              </div>
            </div>
          </div>
          <div className="mission">
              <div className="mission-text">
                <h4>Our <span>mission</span></h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa ducimus. Itaque repudiandae animi sunt fugiat delectus totam adipisci non quia corporis, unde, temporibus, ea perspiciatis impedit! Qui sed aperiam maxime optio libero. Hic itaque provident perferendis? Minima, commodi pariatur.
                </p>
              </div>
              <div className="mission-text">
                <h4>Our <span>vision</span></h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa ducimus. Itaque repudiandae animi sunt fugiat delectus totam adipisci non quia corporis, unde, temporibus, ea perspiciatis impedit! Qui sed aperiam maxime optio libero. Hic itaque provident perferendis? Minima, commodi pariatur.
                </p>
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