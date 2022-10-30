import React from 'react'
import Img2 from '../assets/Collecting.png'
import Img3 from '../assets/Invest.png'
import Img7 from '../assets/Teach.png'
import Img1 from '../assets/Transfer.png'
import Img6 from '../assets/Pay.png'
import Img4 from '../assets/payment.png'



const Experience = () => {
  const items = [{
    id: 1,
    image: Img1 ,
    name: 'micro and personal loan'

  },
  {
    id: 2,
    image: Img2 ,
    name: 'business loan'
  },
  {
    id: 3,
    image: Img6 ,
    name: 'savings',
  },
  {
    id: 4,
    image: Img4 ,
    name: 'thrift collection'
  },
  {
    id: 5,
    image: Img3 ,
    name: 'investments'
  },
  {
    id: 6,
    image: Img7 ,
    name: 'training and consultation'
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
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elitmolestiae a maiore hic sint ipsa sed quia.
            </p>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro laboriosam sed unde, tempora a!
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