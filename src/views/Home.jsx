import React from 'react'
import WithAuth from '../routes/WithAuth'
import icon from '../assets/undraw_under_construction_-46-pa.svg'

const Home = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '70vh' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <img src={icon} width={100} />
        <h1 style={{ color: '#4a90e2' }}>We are Cooking Our Website</h1>
        <span style={{ fontSize: '11px' }}>We are going to launch this page very soon</span>
      </div>
    </div>
  )
}
export default WithAuth(Home)