import React from 'react'
import Img1 from '../assets/leader.jpg'
import Img2 from '../assets/innovation.jpeg'
import Img3 from '../assets/discipline.jpg'
import Img4 from '../assets/last.jpeg'
const Offers = () => {

  const items = [{
    id: 1,
    name: 'Great Leadership',
    text: 'To catalyze clear and shared vision with great commitment and vigorous pursuit of customer, investor and employee satisfaction.',
    image: Img1
  },
  {
    id: 2,
    name: 'Innovative / Creativity',
    text: 'Receptivity to ideas, giving room to creativity following with action is a path we follow',
    image: Img2
  },
  {
    id: 3,
    name: 'Discipline ',
    text: 'Giving attention to details without removing from values makes us different',
    image: Img3
  },
  {
    id: 4,
    name: 'Tactical Excellency',
    text: 'Creating environment for employees tp exercise business action well to customer satisfaction.',
    image: Img4
  },
]


  return (
    <div className="offers">
      <section>
        <div className="offers-container">
          <div className="center-header">
            <h4 className="headline">
              why choose <span>us</span>
            </h4>
            <div className="divider"></div>
          </div>
          <div className='offers-cont'>
            {
              items.map(item => {
                return <article className='item' key={item.id}>
                  <div>
                    <h4 className="headline">
                      {item.name}
                    </h4>
                    <p>{item.text}</p>
                  </div>
                  <div className='image'>
                    <img src={item.image} alt="offers" />
                  </div>
                </article>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers