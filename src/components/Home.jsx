import React from 'react'
import Typewriter from 'typewriter-effect'
import Img1 from '../assets/homebg.jpeg'


const Home = () => {
  return (
    <div className="home-container">
      <section>
        <div className="home">
          <div className="text">
            <div className="headline-trans">
              <h6>
                save, invest and learn.
              </h6>
            </div>
            <h2>
              Welcome to
              <span>
              <Typewriter options={{
                autoStart: true,
                loop: true
                }} 
                onInit={(typewriter) => {
                typewriter.typeString(`Nebo Ascending Ventures`)
                .pauseFor(250000)
                .deleteAll()
                .start()
              }}
              />
              </span>
            </h2>
            <p>
              Nebo Ascending Ventures is a thrifting contributions and money lending service business. We meet the little
              petty cash needs that comes urgent at little at little interest for the customer to pay at convenience and spread
              over a time or at a target date to soothe personal and business needs. 
            </p>
            <button className='btn btn-blue'>
              Get Started
            </button>
          </div>
          <div className="image">
            <img src={Img1} alt="home" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home