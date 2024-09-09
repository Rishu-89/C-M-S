
import Register from "./components/pages/Register"
import Layout from "./components/layout/Layout"
import { Route,Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import PageNotFound from "./components/pages/PageNotFound"

import HomePage from "./components/pages/HomePage"
import Write from "./components/pages/Write"
import PrivateRoute from "./components/pages/PrivateRoute"



// tailbits
//Frame motion
//dasy ui
// medium
export default function App() {
  return (
   <>
 
   
    

<Routes>

  <Route path="/write" element={<PrivateRoute/>} >
   <Route path="" element={<Write/>}></Route>
  </Route>
  <Route path="/" element={<HomePage/>}></Route>

  <Route path="/" element={<Layout/>}></Route>

  <Route path="/register" element={<Register/>} ></Route>
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="*" element={<PageNotFound/>}></Route>
</Routes>

   </>
  )
}