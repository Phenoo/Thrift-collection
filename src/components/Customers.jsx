import React from 'react'

const Customers = () => {
  return (
    <div className="target">
      <section>
        <div className="center-header">
          <h4 className="headline">
            our target <span>customer</span>
          </h4>
          <p>
            Our company is for all that's why we have different classes which covers everyone.
          </p>
          <div className="divider"></div>
        </div>
        <div className="target-container">
          <article>
            <h4>low income earners</h4>
            <p>
              self employed, petty traders, tailors, food vendor, beauty and barbing salons, 
              butchers, taxi drivers, tricycle owners, okada riders, farmers and etc.
            </p>
          </article>
          <article>
            <h4>
              middle level income
            </h4>
            <p>
              self employed and employees, beer parlour owners, bus owners, bank employees and civil servants etc.
            </p>
          </article>
          <article>
            <h4>
            higher level income
            </h4>
            <p>
              Owners of schools, shop owners, distrubutor, village and town self help groups, small churches and mosques and etc
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Customers