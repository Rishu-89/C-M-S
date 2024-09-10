
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  let navigate=useNavigate()
  let [auth,setAuth]=useAuth();
  let [search,setsearch]=useState('');

  let handelSearch=()=>{
      navigate(`/search/${search}`);
  }


  let handelLogOut=()=>{
    setAuth({
      ...auth,user:null,token:""
    })
    // localStorage.setItem("auth",JSON.stringify({user:null,token:""}))
    localStorage.removeItem('auth');
    toast.success("Logout Sucessfully")
  }
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
        <div className="flex-shrink-0">
          <Link to="/" title="" className="flex">
            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
          </Link>
        </div>

        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>

          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
          <Link to="/" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            Read
          </Link>

          <Link to="/user" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            Lets Write
          </Link>

          <Link to="/aboutUs" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            AboutUs
          </Link>

          <div className="w-full md:w-auto">
            <input type="text" placeholder="Search..." className="p-2 border rounded w-full md:w-64" value={search} onChange={(e)=>{setsearch(e.target.value)}} 
            onKeyDown={(e)=>{
              if(e.key=="Enter"){
                handelSearch()
              }
              
            }}
            />
          </div>
        </div>

{auth?.token ? <><div className="hidden lg:flex lg:items-center lg:space-x-10">
          <Link to="/user/dashBoard" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            {auth.user.name}
          </Link>

          <button onClick={handelLogOut} title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            Sign out
          </button>
        </div></>:<><div className="hidden lg:flex lg:items-center lg:space-x-10">
          <Link to="/register" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            Sign up
          </Link>

          <NavLink to="/login" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
            Sign in
          </NavLink>
        </div></>}
        

      </nav>

      
    </div>
  );
};

export default Navbar
    