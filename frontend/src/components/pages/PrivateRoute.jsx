import React from 'react'
import { useAuth } from '../context/authContext'
import { Outlet } from 'react-router-dom'
import Spinner from './Spinner'

const PrivateRoute = () => {
  let [auth,setAuth]=useAuth()

  return (
    <>
    {auth?.token?<Outlet/>:<Spinner/>}
    </>
  )
}

export default PrivateRoute
