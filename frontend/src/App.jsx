
import Register from "./components/pages/Register"
import Layout from "./components/layout/Layout"
import { Route,Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import PageNotFound from "./components/pages/PageNotFound"

import HomePage from "./components/pages/HomePage"
import Write from "./components/pages/Write"
import PrivateRoute from "./components/pages/PrivateRoute"
import Dashboard from "./components/pages/Dashboard"
import EditBlog from "./components/pages/EditBlog"
import SingleBlog from "./components/pages/SingleBlog"
import AboutUs from "./components/pages/Aboutus"
import Search from "./components/pages/Search"



// tailbits
//Frame motion
//dasy ui
// medium
export default function App() {
  return (
   <>
 
   
    

<Routes>

  <Route path="/user" element={<PrivateRoute/>} >
   <Route path="" element={<Write/>}></Route>
   <Route path="dashBoard" element={<Dashboard/>}></Route>
   <Route path="edit/:id" element={<EditBlog/>}></Route>
  </Route>

  
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/blog/:id" element={<SingleBlog/>}></Route>
  <Route path="/aboutUs" element={<AboutUs/>}></Route>

  <Route path="/register" element={<Register/>} ></Route>
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="/search/:search" element={<Search/>} ></Route>
  <Route path="*" element={<PageNotFound/>}></Route>


</Routes>

   </>
  )
}