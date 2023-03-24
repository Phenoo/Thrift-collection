import React from 'react'
import Home from '../components/Home'
import Experience from '../components/Experience'
import Offers from '../components/Offers'
import Customers from '../components/Customers'
import Layout from '../components/Layout'


const Main = () => {
  return (
    <Layout>
      <Home />
      <Offers />
      <Experience />
      <div className="divider-home" />
      <Customers />
    </Layout>
  )
}

export default Main