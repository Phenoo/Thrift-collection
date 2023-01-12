import React from 'react'
import Img2 from '../assets/Collecting.png'
import Img1 from '../assets/Transfer.png'
import Img6 from '../assets/Pay.png'



const Experience = () => {
  const items = [{
    id: 1,
    image: Img1 ,
    name: 'CONTRIBUTION COLLECTIONS',
    text: 'We have seasoned,energetic and smart collectors who moves to client locations to collect our Contributions with proper recording and returns as requested on daily, weekly or monthly basis'

  },
  {
    id: 2,
    image: Img2 ,
    name: 'TRADE PARTNER INVESTMENT',
    text: 'Minimum start up cash investment of NGN500,000, over a minimum of two year period before withdrawal. However,after the two years,withdrawal is with a three months notice to The office via email,text message or hand written request before  payment. Note that interest on this is 20% p.a'
  },
  {
    id: 3,
    image: Img6 ,
    name: 'LOANS',
    text: 'We offer various types of loans with varying interest rate including Staff loans,  Business Partner Loans, Community Loans, Asset Finance service loans'
  },
  
]

  return (
    <div className="experience">
      <section>
        <div className="experience-container">     
          <div className='center-header'>
            <h4 className="headline">
              what we <span>
              offer
              </span>
            </h4>
            <div className="divider"></div>
          </div>
          <section className="experience-best">
            {
              items.map((item) => {
                return (
                  <article className="item-card" key={item.id}>
                    <div className="image">
                      <img src={item.image} alt="offer" />
                    </div>
                    <div className="text">
                      <h4>
                        {item.name}
                      </h4>
                      <p>
                        {item.text}.
                      </p>
                    </div>
                  </article>
                )
              })
            }
          </section>
        </div>
      </section>
    </div>
  )
}

export default Experience