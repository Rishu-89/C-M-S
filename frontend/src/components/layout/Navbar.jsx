
// import React, { useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   let navigate=useNavigate()
//   let [auth,setAuth]=useAuth();
//   let [search,setsearch]=useState('');

//   let handelSearch=()=>{
//       navigate(`/search/${search}`);
//   }


//   let handelLogOut=()=>{
//     setAuth({
//       ...auth,user:null,token:""
//     })
//     // localStorage.setItem("auth",JSON.stringify({user:null,token:""}))
//     localStorage.removeItem('auth');
//     toast.success("Logout Sucessfully")
//   }
//   return (
//     <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//       <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
//         <div className="flex-shrink-0">
//           <Link to="/" title="" className="flex">
//             <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
//           </Link>
//         </div>

//         <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
//           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>

//           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
//           <Link to="/" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             Read
//           </Link>

//           <Link to="/user" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             Lets Write
//           </Link>

//           <Link to="/aboutUs" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             AboutUs
//           </Link>

//           <div className="w-full md:w-auto">
//             <input type="text" placeholder="Search..." className="p-2 border rounded w-full md:w-64" value={search} onChange={(e)=>{setsearch(e.target.value)}} 
//             onKeyDown={(e)=>{
//               if(e.key=="Enter"){
//                 handelSearch()
//               }
              
//             }}
//             />
//           </div>
//         </div>

// {auth?.token ? <><div className="hidden lg:flex lg:items-center lg:space-x-10">
//           <Link to="/user/dashBoard" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             {auth.user.name}
//           </Link>

//           <button onClick={handelLogOut} title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             Sign out
//           </button>
//         </div></>:<><div className="hidden lg:flex lg:items-center lg:space-x-10">
//           <Link to="/register" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             Sign up
//           </Link>

//           <NavLink to="/login" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
//             Sign in
//           </NavLink>
//         </div></>}
        

//       </nav>

      
//     </div>
//   );
// };

// export default Navbar




// import React, { useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/authContext';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   let navigate = useNavigate();
//   let [auth, setAuth] = useAuth();
//   let [search, setSearch] = useState('');
//   let [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

//   let handelSearch = () => {
//     navigate(`/search/${search}`);
//   };

//   let handelLogOut = () => {
//     setAuth({
//       ...auth,
//       user: null,
//       token: ''
//     });
//     localStorage.removeItem('auth');
//     toast.success('Logout Successfully');
//   };

//   let toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu
//   };

//   return (
//     <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//       <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
//         <div className="flex-shrink-0">
//           <Link to="/" title="" className="flex">
//             <img
//               className="w-auto h-8 lg:h-10"
//               src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
//               alt="Logo"
//             />
//           </Link>
//         </div>

//         <button
//           type="button"
//           className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//           onClick={toggleMenu} // Toggle menu on click
//         >
//           {!isMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}
//         </button>

//         <div
//           className={`lg:flex lg:items-center lg:space-x-10 ${
//             isMenuOpen ? 'block' : 'hidden'
//           } lg:block lg:mr-auto absolute lg:static top-16 inset-x-0 bg-white lg:bg-transparent z-10 lg:space-y-0 space-y-4 p-4 lg:p-0`}
//         >
//           <Link
//             to="/"
//             title=""
//             className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//           >
//             Read
//           </Link>

//           <Link
//             to="/user"
//             title=""
//             className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//           >
//             Let's Write
//           </Link>

//           <Link
//             to="/aboutUs"
//             title=""
//             className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//           >
//             About Us
//           </Link>

//           <div className="w-full md:w-auto">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="p-2 border rounded w-full md:w-64"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handelSearch();
//                 }
//               }}
//             />
//           </div>
//         </div>

//         {auth?.token ? (
//           <div
//             className={`lg:flex lg:items-center lg:space-x-10 ${
//               isMenuOpen ? 'block' : 'hidden'
//             } lg:block absolute lg:static top-16 inset-x-0 bg-white lg:bg-transparent z-10 space-y-4 p-4 lg:p-0`}
//           >
//             <Link
//               to="/user/dashBoard"
//               title=""
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//             >
//               {auth.user.name}
//             </Link>

//             <button
//               onClick={handelLogOut}
//               title=""
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//             >
//               Sign out
//             </button>
//           </div>
//         ) : (
//           <div
//             className={`lg:flex lg:items-center lg:space-x-10 ${
//               isMenuOpen ? 'block' : 'hidden'
//             } lg:block absolute lg:static top-16 inset-x-0 bg-white lg:bg-transparent z-10 space-y-4 p-4 lg:p-0`}
//           >
//             <Link
//               to="/register"
//               title=""
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//             >
//               Sign up
//             </Link>

//             <NavLink
//               to="/login"
//               title=""
//               className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline"
//             >
//               Sign in
//             </NavLink>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

    
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  let navigate = useNavigate();
  let [auth, setAuth] = useAuth();
  let [search, setSearch] = useState('');
  let [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  let handelSearch = () => {
    navigate(`/search/${search}`);
  };

  let handelLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  };

  let toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav className="flex flex-col lg:flex-row items-center justify-between h-auto bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link to="/" title="" className="flex">
            <img
              className="w-auto h-8 lg:h-10"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt="Logo"
            />
          </Link>

          <button
            type="button"
            className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu} // Toggle menu on click
          >
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`lg:flex lg:items-center lg:space-x-10 w-full lg:w-auto ${
            isMenuOpen ? 'flex flex-col mt-4' : 'hidden'
          } lg:flex lg:flex-row lg:mt-0`}
        >
          <Link
            to="/"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
          >
            Read
          </Link>

          <Link
            to="/user"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
          >
            Let's Write
          </Link>

          <Link
            to="/aboutUs"
            title=""
            className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
          >
            About Us
          </Link>

          <div className="w-full md:w-auto mt-2 lg:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded w-full md:w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handelSearch();
                }
              }}
            />
          </div>
        </div>

        {auth?.token ? (
          <div
            className={`lg:flex lg:items-center lg:space-x-10 w-full lg:w-auto ${
              isMenuOpen ? 'flex flex-col mt-4' : 'hidden'
            } lg:flex lg:flex-row lg:mt-0`}
          >
            <Link
              to="/user/dashBoard"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
            >
              {auth.user.name}
            </Link>

            <button
              onClick={handelLogOut}
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div
            className={`lg:flex lg:items-center lg:space-x-10 w-full lg:w-auto ${
              isMenuOpen ? 'flex flex-col mt-4' : 'hidden'
            } lg:flex lg:flex-row lg:mt-0`}
          >
            <Link
              to="/register"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
            >
              Sign up
            </Link>

            <NavLink
              to="/login"
              title=""
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 block lg:inline mt-2 lg:mt-0"
            >
              Sign in
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
