import React, { useState } from 'react'
import Accordion from './Accordion'
const data = [
  {
    id: 1,
    title: 'What is return policy?',
    answer: `
    A successful transfer of money relies heavily on thepulling power of the advertising copy. Writing to a bank account
    ad copy is difficult, as it must appeal to, entice and convince consumers to take action.    
    `
  },
  {
    id: 2,
    title: 'How much is shipping charges?',
    answer: `
    A successful transfer of money relies heavily on thepulling power of the advertising copy. Writing to a bank account
    ad copy is difficult, as it must appeal to, entice and convince consumers to take action.    
    `
  },
  {
    id: 3,
    title: 'How can i check the status of my order?',
    answer: `
    A successful transfer of money relies heavily on thepulling power of the advertising copy. Writing to a bank account
    ad copy is difficult, as it must appeal to, entice and convince consumers to take action.    
    `
  },
  {
    id: 4,
    title: 'When will my order ship ?',
    answer: `
      A successful transfer of money relies heavily on thepulling power of the advertising copy. Writing to a bank account
      ad copy is difficult, as it must appeal to, entice and convince consumers to take action.
    `
  },
]
const Faq = () => {
  const [ask, setAsk] = useState(data)

  return (
    <section>
      <div className='faq'> 
        <div className="center-header">
          <h4 className='headline'>
            Frequently asked <span> questions</span>
          </h4>
          <p className='sub'>
            Everything you need to know about the product
          </p>
          <div className="divider"></div>
        </div>
        <ul className='faq-container'>
        {
            ask.map(question  => {
              return <Accordion key={question.id} {...question} set={setAsk} />
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Faq