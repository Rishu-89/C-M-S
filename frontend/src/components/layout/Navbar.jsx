import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    // <nav className="flex items-center justify-between py-3 mb-20 text-neutral-300 ">
    //   <div className="flex items-center flex-shrink-0 text-3xl">Logo</div>
    //   <div className="flex items-center gap-4 m-4 text-xl">
    //     <div className="w-full md:w-auto">
    //   <input type="text" placeholder="Search..." className="p-2 border rounded w-full md:w-64"/>
    // </div>
        
    //     <div>Aboutus</div>
    //     <div>write s</div>
    //     <div>sign in</div>
        
    //   </div>
    // </nav>
    
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
     
        <nav class="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> 
            </button>

            <div class="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Read </a>

               

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Lets Write </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> AboutUs </a>
                <div className="w-full md:w-auto">
       <input type="text" placeholder="Search..." className="p-2 border rounded w-full md:w-64"/>
     </div>
            </div>

            <div class="hidden lg:flex lg:items-center lg:space-x-10">
                <Link to="/register" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign up </Link>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign in </a>
            </div>
        </nav>

 
        <nav class="flex flex-col py-4 space-y-2 lg:hidden">
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources </a>

            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
        </nav>
    </div>


  )
}

export default Navbar
