import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {

  return (
    <div className="subscribe">
      <section>
        <div className='engine'>
          <h4>
            Still have questions?
          </h4>
          <h6>
            Can't find the answer you're looking for? Please chat to our friendly
          </h6>
          <button className="btn btn-blue">
            <Link to='/contact'>
            get in touch
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Subscribe