
import Register from "./components/pages/Register"
import Layout from "./components/layout/Layout"
import { Route,Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import PageNotFound from "./components/pages/PageNotFound"


// tailbits
//Frame motion
//dasy ui
// medium
export default function App() {
  return (
   <>
 
   
    

<Routes>
  <Route path="/" element={<Layout/>}></Route>
  <Route path="/register" element={<Register/>} ></Route>
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="*" element={<PageNotFound/>}></Route>
</Routes>

   </>
  )
}