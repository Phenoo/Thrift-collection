import React from 'react'
import Home from '../components/Home'
import Experience from '../components/Experience'
import Faq from '../components/Faq'
import Offers from '../components/Offers'
import Customers from '../components/Customers'
import Subscribe from '../components/Subscribe'

const Main = () => {
  return (
    <>
      <Home />
      <Offers />
      <Experience />
      <Customers />
      <Faq />
      <Subscribe />
    </>
  )
}

export default Main