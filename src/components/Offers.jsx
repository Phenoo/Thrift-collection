import React from 'react'
import Img1 from '../assets/homebg.jpeg'
const Offers = () => {

  const items = [{
    id: 1,
    name: 'Experience US banking at its finest',
    text: 'With a free US checking account, you can pay for international tuition, accommodation, luxury vacation, send money to friends and family abroad, providing financial peace of mind to millions of people. FDIC - each depositor insured to at least $250,000 - Backed by the full faith and credit of the United States Government'

  },
  {
    id: 2,
    name: 'Gain entry to all borders',
    text: 'Conveniently send and receive money in multiple currencies, make large payments for investment, pay mortgages, and other bills across all borders. Bird provides easy access to international banking and digital financial services for the 1 billion people on the emerging market.'
  },
  {
    id: 3,
    name: 'One app for all accounts',
    text: 'Managing multiple accounts from a single app, saves you the trouble of carrying multiple cards, as well as the time and stress of navigating multiple mobile apps to complete any transaction.'
  },
  {
    id: 4,
    name: 'Checkout with Nebo Ventures',
    text: 'You can integrate the BirdNet fast checkout controls into your website or app. It accepts local and international payments for businesses of all sizes.'
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
                return <article>
                  <div>
                  <h4 className="headline">
                    {item.name}
                  </h4>
                  <p>{item.text}</p>
                  </div>
                  <div>
                    <img src={Img1} alt="offers" />
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