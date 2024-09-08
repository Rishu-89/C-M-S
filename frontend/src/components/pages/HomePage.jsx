import React from 'react'
import Layout from '../layout/Layout'
import { useAuth } from '../context/authContext'

const HomePage = () => {
let [auth]=  useAuth()
  return (
    <Layout>
      <h1>Home Page</h1>
   <h1>{auth.token}</h1> 
  
    </Layout>
  )
}

export default HomePage
